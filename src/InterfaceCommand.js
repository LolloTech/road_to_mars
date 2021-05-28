'use strict';

/**
 * This class represents an interface that has to be extended by all the commands implemented and used by the Rover.
 * Every command has, at least, to implement the execute() method of this class.
 */
class InterfaceCommand {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }

    /**
     * Conceptually, this method contains the code that every commands execute when invoked.
     */
    execute() {
        throw new Error("NOT IMPLEMENTED!");
    }

}

module.exports = InterfaceCommand;
