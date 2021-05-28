'use strict';

/**
 * This class represents the command that indicates the Rover to make a step - to the left.
 */
const InterfaceCommand = require('./InterfaceCommand');

class GoLeftCommand extends InterfaceCommand {

    get field() {
        return this._field;
    }

    execute() {
        console.log(`GoLeftCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        this.field.changePosition('LEFT', null);
        console.log(`GoLeftCommand >> from execute: ${this.field.directionOrientation} ${this.field._directionDegree}`);
        console.log(`moved to: ${this.field._actualXCoordinate} ${this.field._actualYCoordinate}`);
    }

}

module.exports = GoLeftCommand;
