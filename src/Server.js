'use strict';

/**
 * This class represents our back-end; it contains an Express.js server, that runs on the IP and PORT specified
 * by configuration.
 * @type {createApplication}
 */
const express = require('express');


class Server {

    constructor(config) {
        this._serverConfig = config;
        this._app = express();
        // this._setRouters();
    }

    get config() {
        return this._serverConfig;
    }
    get app() {
        return this._app;
    }

    /**
     * This set the Server's routes; it is called from the Main, and the Rover is given as a parameter
     * to permit the executions of the commands that are send from the api requests.
     * @param myRover: the instance of the rover.
     */
    setRouters(myRover) {

        this.app.get('/', (req, res) => {
            res.send('<h3>Hello World!</h3>');
        });
        this.app.get('/parseCommands', (req, res) => {
            const arrayOfCommands = JSON.parse(req.query.array);
            const returnedObj = myRover.handleCommandsRequest(arrayOfCommands);

            console.log(returnedObj);
            res.send(
                `<h3>COMMANDS ELABORATED!</h3><br/>
                <b>Commands executed</b>: 
                ${returnedObj.executedCommands}<br/>
                ${returnedObj.message}</br>
                ${returnedObj.stepsMade.join('<br>')}
                `);
        });
    }

    /**
     * This function starts the listening of the server.
     */
    listen() {
        this.app.listen(
            this.config.port, this.config.hostname,
            () =>
                console.log(`Server application listening, on port ${this.config.port} at IP ${this.config.hostname} !`),
        );
    }
}

module.exports = Server;
