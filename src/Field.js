'use strict';

/**
 * This class purpose is to be a representation of the map that the rover "hypothetically" captures with its sensors.
 * In this program, the Rover itself is supposed to discover the map of the planet and find all the obstacles in it.
 * So, this class is used to represent the discovery made by the Rover, regarding the map of the planet.
*/

const MAP_DEGREE_WITH_DIRECTION = {
    "0": "N",
    "90": "E",
    "180": "S",
    "270": "W"
};

class Field {
    constructor(configuration) {
        this._rows = configuration.width;
        this._columns = configuration.height;
        this._directionOrientation = configuration.directionOrientation; // N | S | E | W
        this._actualXCoordinate = configuration.initialXCoordinate;
        this._actualYCoordinate = configuration.initialYCoordinate;
        // It will yield to: 0 | 90 | 180 | 270
        this._directionDegree = this._getDirectionDegreeFromDirection(configuration.directionOrientation);
        this._matrix = [];
        // for (let i = 0; i < this._rows; i++) {
        //     this._matrix.push([]);
        //     for (let j = 0; j < this._columns; j++) {
        //         this._matrix[i].push(new Square());
        //     }
        // }
    }

    get getMatrix() {
        return this._matrix;
    }
    get getX() {
        return this._actualXCoordinate;
    }
    get getY() {
        return this._actualYCoordinate;
    }
    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
    get directionOrientation() {
        return this._directionOrientation;
    }
    set directionOrientation(degrees) {
        this._directionOrientation = MAP_DEGREE_WITH_DIRECTION[degrees];
    }

    /**
     * This function returns the direction in degree, that matches the given orientation(that is in character format).
     * NORTH: 0 degree
     * EAST: 90 degree
     * SOUTH: 180 degree
     * WEST: 270 degree
     *
     * @param direction
     * @returns {number}
     * @private
     */
    _getDirectionDegreeFromDirection(direction) {
        if (direction === 'N') {
            return 0;
        }
        else if (direction === 'E') {
            return 90;
        }
        else if (direction === 'S') {
            return 180;
        }
        else if (direction === 'W') {
            return 270;
        }
    }


    /**
     * This function changes the current position of the rover. It is a change in the x|y axes and not a rotation.
     * All changes are an increment of +-1 of the current position.
     * The changes in the direction are made considering the orientation of the rover.
     * For example, if the Rover is ->
     * pointing at NORTH, and it wants to make a LEFT movement, it will move by -1 pixel at its left(its left means
     * effectively x= x MINUS 1 for our system of reference).
     * For example, if the Rover is ->
     * pointing at SOUTH, and it wants to make a LEFT movement, it will move by -1 pixel at its left(its left means
     * effectively x= x PLUS 1 for our system of reference).
     * @param xDir: LEFT | RIGHT, means that BASING on the direction, we want to go one step left | right
     * @param yDir: FRONT | BACK, means that BASING on the direction, we want to go one step in front | back
     * @returns {{x: *, y: *}}
     */
    changePosition(xDir, yDir) {
        const amountResult = this.getChangePositionConsideringDirectionAmout(xDir, yDir, this.directionOrientation);

        return this.setNewCoordinates(amountResult);
    }
    setNewCoordinates(coordinates) {
        let proposedX = this._actualXCoordinate + coordinates.xAmount;
        let proposedY = this._actualYCoordinate + coordinates.yAmount;
        let proposedNewSquare = null;

        // Now, check the operations result
        if (proposedX < 0) {
            proposedX = this._columns - 1;
        }
        else if (proposedX >= this._columns) {
            proposedX = 0;
        }
        if (proposedY < 0) {
            proposedY = this._rows - 1;
        }
        else if (proposedY >= this._rows) {
            proposedY = 0;
        }
        proposedNewSquare = this.getSquare(proposedX, proposedY);
        console.log(`proposedX: ${proposedX} and proposedY: ${proposedY}`);
        console.log(`getting intrested square: ${this.getSquare(proposedX, proposedY).toString()}`);
        console.log(this.getSquare(proposedX, proposedY));

        if (proposedNewSquare._hasAnObstacle === false) {
            const oldSquare = this.getSquare(this._actualXCoordinate, this._actualYCoordinate);

            oldSquare._isMyCurrentPosition = false;
            this._actualXCoordinate = proposedNewSquare._x;
            this._actualYCoordinate = proposedNewSquare._y;
            proposedNewSquare._isMyCurrentPosition = true;
        }
        else {
            throw new Error(
                `CANNOT MOVE TO THIS POSITION! 
                There is an obstacle in x:${proposedX} y:${proposedY} -> Obstacle: ${proposedNewSquare._hasAnObstacle}! 
                Aborting operations!`
            );
        }
        console.log(`New Field Matrix ->`);
        // console.log(this._matrix);
        return {x: proposedX, y: proposedY};

    }

    /**
     * Makes "the dirty work" of find the correct amount to increment for move the rover, for the changePosition
     * function.
     * @param xDirection: 'LEFT' | 'RIGHT'
     * @param yDirection: "FRONT" | "BACK"
     * @param orientation: 'N' | 'S' | 'E' | 'W' |
     * @returns {{yAmount: number, xAmount: number}}
     */
    getChangePositionConsideringDirectionAmout(xDirection, yDirection, orientation) {
        let xAmount = 0;
        let yAmount = 0;

        if (xDirection === 'LEFT') {
            if (orientation === 'N') {
                xAmount = xAmount - 1;
            }
            else if (orientation === 'S') {
                xAmount = xAmount + 1;
            }
            else if (orientation === 'E') {
                yAmount = yAmount + 1;
            }
            else if (orientation === 'W') {
                yAmount = yAmount - 1;
            }
        }
        else if (xDirection === 'RIGHT') {
            if (orientation === 'N') {
                xAmount = xAmount + 1;
            }
            else if (orientation === 'S') {
                xAmount = xAmount - 1;
            }
            else if (orientation === 'E') {
                yAmount = yAmount - 1;
            }
            else if (orientation === 'W') {
                yAmount = yAmount + 1;
            }
        }
        if (yDirection === 'BACK') {
            if (orientation === 'N') {
                yAmount = yAmount - 1;
            }
            else if (orientation === 'S') {
                yAmount = yAmount + 1;
            }
            else if (orientation === 'E') {
                xAmount = xAmount - 1;
            }
            else if (orientation === 'W') {
                xAmount = xAmount + 1;
            }

        }
        if (yDirection === 'FRONT') {
            if (orientation === 'N') {
                yAmount = yAmount + 1;
            }
            else if (orientation === 'S') {
                yAmount = yAmount - 1;
            }
            else if (orientation === 'E') {
                xAmount = xAmount + 1;
            }
            else if (orientation === 'W') {
                xAmount = xAmount - 1;
            }

        }
        return {xAmount, yAmount};


    }

    // Always rotate by 90 degree, basing on the 1 or -1 param: +1 means +90 degree (clockwise), -1 means non clockwise
    /**
     * Conceptually, the purpose of this function is to change the orientation of the rover.
     * @param sign: +1 | -1;
     * +1 means +90 degree(interpreted as clockwise);
     * -1 means -90 degree(interpreted as reverse of clockwise).
     */
    changeDirection(sign) {
        if (sign === 1) {
            this._directionDegree += 90;

        }
        else {
            this._directionDegree -= 90;
        }
        // IT has rotated to N
        if (this._directionDegree > 270) {
            this._directionDegree = 0;
        }
        // IT has rotated to W
        if (this._directionDegree < 0) {
            this._directionDegree = 270;
        }
        this.directionOrientation = this._directionDegree;

    }

    /**
     * It returns a given square of the map (field)
     * @param x: x coordinate
     * @param y: y coordinate
     * @returns {Square} - the found Square.
     */
    getSquare(x, y) {
        return this.getMatrix[x][y];
    }

    /**
     * It fills the matrix (of Square element) given from the Rover.
     * The idea behind this method is that the Rover, with its sensors and instruments, captures a raw map of its view
     * (that in our case, for simplification, it corresponds to the entire planet Mars). After the Rover capture
     * operation, the raw data will be transformed in a more simplified representation, and this is the purpose of
     * this method.
     * @param arrayOfGivenElements: Array
     */
    loadRawMap(arrayOfGivenElements) {
        for (let i = 0; i < this._rows; i++) {
            this._matrix.push([]);
            for (let j = 0; j < this._columns; j++) {
                const currentElement = arrayOfGivenElements[i * this._columns + j];

                this._matrix[i].push(currentElement);
            }
        }
    }


}

module.exports = Field;
