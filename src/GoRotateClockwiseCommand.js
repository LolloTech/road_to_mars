'use strict';

/**
 * This class represents the command that indicates the Rover to make a clockwise rotation.
 */
const InterfaceCommand = require('./InterfaceCommand');

class GoRotateClockwiseCommand extends InterfaceCommand {
    get field() {
        return this._field;
    }

    execute() {
        console.log(`GoRotateClockwiseCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        this.field.changeDirection(1);
        console.log("DIRECTION CHANGED!");
        console.log(`GoRotateClockwiseCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        console.log(`rotated to: ${this.field.directionOrientation} ${this.field._directionDegree}`);
    }

}

module.exports = GoRotateClockwiseCommand;
