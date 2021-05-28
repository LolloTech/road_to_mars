'use strict';

/**
 * This class represents a class that takes all the possible commands and instantiates them. With this class we can
 * give all the possible commands to the Rover class, and the Rover class is transparent about the implementation of
 * this commands.
 *
 * All this commands implement the interface InterfaceCommand
 */
const GoFrontCommand = require('./GoFrontCommand');
const GoBackCommand = require('./GoBackCommand');
const GoLeftCommand = require('./GoLeftCommand');
const GoRightCommand = require('./GoRightCommand');
const GoRotateClockwiseCommand = require('./GoRotateClockwiseCommand');
const GoRotateReverseClockwiseCommand = require('./GoRotateReverseClockwiseCommand');

class Commands {
    static initializeCommands(field) {
        this.exportCommands = {};
        this.exportCommands.GoFrontCommand = new GoFrontCommand(field);
        this.exportCommands.GoBackCommand = new GoBackCommand(field);
        this.exportCommands.GoLeftCommand = new GoLeftCommand(field);
        this.exportCommands.GoRightCommand = new GoRightCommand(field);
        this.exportCommands.GoRotateClockwiseCommand = new GoRotateClockwiseCommand(field);
        this.exportCommands.GoRotateReverseClockwiseCommand = new GoRotateReverseClockwiseCommand(field);

        return this.exportCommands;
    }
}


module.exports = Commands;
