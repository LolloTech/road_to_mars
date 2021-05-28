'use strict';

/**
 * * This class represents the command that indicates the Rover to make a reverse-clockwise rotation.
 */
const InterfaceCommand = require('./InterfaceCommand');

class GoRotateReverseClockwiseCommand extends InterfaceCommand {
    get field() {
        return this._field;
    }

    execute() {
        console.log(`GoRotateAntiClockwise >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        this.field.changeDirection(-1);
        console.log("DIRECTION CHANGED!");
        console.log(`GoRotateAntiClockwise >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        console.log(`Rotated to: ${this.field.directionOrientation} ${this.field._directionDegree}`);
    }

}

module.exports = GoRotateReverseClockwiseCommand;
