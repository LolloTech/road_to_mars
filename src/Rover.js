'use strict';

/**
 * This class represents our virtual Rover. The rover does some operations but because is ideally a mechanical device,
 * it has some lag to ultimate his duties. This is the motivation behind the fact that some of the methods of the class
 * Rover have to sleep for some (micro)seconds.
 */
const Utils = require('./Utils');
const Square = require('./Square');
const Field = require('./Field');
const Commands = require('./Commands');

class Rover {
    constructor(config) {
        this._config = config;
        this._field = new Field(config);
        this._commands = Commands.initializeCommands(this._field);
    }

    get field() {
        return this._field;
    }

    /**
     * This operation virtually represents the start of our Rover.
     * @returns {Promise<*>}
     */
    async initializeRover() {
        return Utils.sleep(() => { console.log("ROVER READY TO MARCH!"); }, null, 1500);
    }

    /**
     * This operation represents the virtual discovery of all the obstacles on planet Mars, made by out Rover. Just for
     * simplification purpose our Rover has the ability to find all the obstacles on mars from his position.
     * @returns {Promise<*>}
     */
    async scanThePlanetForObstacles() {
        console.log("SCANNING THE PLANET MARS! . . .");
        console.log(`MY INITIAL COORDS: ${this._config.initialXCoordinate} ${this._config.initialYCoordinate}`);

        return Utils.sleep(
            this._scanTheFieldWithMachinery.bind(this),
            null,
            1000);
    }


    /**
     * This method makes the "dirty work" for scanThePlanetForObstacles. It contains the business logic for "finding"
     * the obstacles on planet Mars.
     * What this function really does, is to create a matrix of dimension number_of_rows X number_of_columns Square
     * objects.
     * It uses Utils.lowProbability for creating Squares with obstacles with, as the name suggests,
     * low probability of appereance.
     * @private
     */
    _scanTheFieldWithMachinery() {
        const points = [];
        const {width, height} = this._config;

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                let point = null;

                if (i === this._config.initialXCoordinate && j === this._config.initialYCoordinate) {
                    point = new Square(i, j, Utils.lowProbabilityEvent(), true);
                }
                else {
                    point = new Square(i, j, Utils.lowProbabilityEvent(), false);
                }

                points.push(point);
            }
        }
        return points;
    }

    /**
     * This method calls the loadRawMap method of the Field class, to load the found array of the Rover class in the
     * internal matrix of the Field object.
     * @param arrayOfFoundElements: the square elements found from the discovery of the Rover.
     * @private
     */
    async loadRawMapInMemory(arrayOfFoundElements) {
        console.log("Loading the row map!. . .");
        return Utils.sleep(() => {
            this.field.loadRawMap.bind(this._field);
            this.field.loadRawMap(arrayOfFoundElements);
            console.log("RAW MAP LOADED IN THE FIELD REPRESENTATION");
            console.log(`DIMENSION OF THE MAP: ${this.field.rows} ROWS AND ${this.field.columns} COLUMNS`);
        },
        null,
        1000);
    }

    /**
     * This is a handler used by the Server class, to handle the GET request filled with commands for the Rover
     * @param receivedCommands: the received commands via GET request, from the exposed Express server
     * @returns {{message: string, executedCommands: Array}}
     */
    handleCommandsRequest(receivedCommands) {
        console.log("receivedCommands:");
        console.log(receivedCommands);

        const result = {
            executedCommands: [],
            message: 'All commands where executed',
            stepsMade: [`Initial points-> x: ${this.field.getX}, y:${this.field.getY}`]
        };

        for (let i = 0; i < receivedCommands.length; i++) {
            const command = receivedCommands[i];

            try {
                if (this._commands[command] === undefined) {
                    result.message = `Where was an error during the execution of command ${command}`;
                    return result;
                }
                this._commands[command].execute();
                result.stepsMade.push(`x: ${this.field.getX}, y:${this.field.getY}`);
                result.executedCommands.push(command);
            }
            catch (err) {
                console.log("There was a problem!");
                //console.log(err);
                console.log(err.message);
                result.executedCommands = result.executedCommands.join(' - ');
                result.message = err.message;
                return result;
                // process.exit(-1);
            }
        }
        return result;
    }
}

module.exports = Rover;
