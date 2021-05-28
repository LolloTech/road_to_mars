'use strict';

/**
 * This class represents the command that indicates the Rover to make a step - to the front.
 */
const InterfaceCommand = require('./InterfaceCommand');

class GoFrontCommand extends InterfaceCommand {
    get field() {
        return this._field;
    }

    execute() {
        console.log(`GoFrontCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        this.field.changePosition(null, 'FRONT');
        console.log(`GoFrontCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        console.log(`moved to: ${this.field._actualXCoordinate} ${this.field._actualYCoordinate}`);
    }

}

module.exports = GoFrontCommand;
