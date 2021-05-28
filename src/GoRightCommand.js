'use strict';

/**
 * This class represents the command that indicates the Rover to make a step - to the right.
 */
const InterfaceCommand = require('./InterfaceCommand');

class GoRightCommand extends InterfaceCommand {

    get field() {
        return this._field;
    }

    execute() {
        console.log(`GoRightCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        this.field.changePosition('RIGHT', null);
        console.log(`GoRightCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        console.log(`moved to: ${this.field._actualXCoordinate} ${this.field._actualYCoordinate}`);
    }

}

module.exports = GoRightCommand;
