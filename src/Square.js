'use strict';

/**
 * This class represents a single Square of the map used by the Rover.
 * The Rover uses an instance of the Field class, that contains in it a matrix of Square element.
 * Virtually, the Square is a place of planet Mars.
 * A square has a x and y coordinates, and can cointain in it an obstacle. It can be marked as the current place
 * where the Rover resides.
 */
class Square {
    constructor(x = null, y = null, hasAnObstacle = null, isMyCurrentPosition = null) {
        this._x = x;
        this._y = y;
        this._hasAnObstacle = hasAnObstacle;
        this._isMyCurrentPosition = isMyCurrentPosition;
    }

    get hasAnObstacle() {
        return this._hasAnObstacle;
    }

    get isMyCurrentPosition() {
        return this._isMyCurrentPosition;
    }

}

module.exports = Square;
