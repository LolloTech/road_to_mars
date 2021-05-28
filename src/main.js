'use strict';

/**
 * This is the entry point of the program.
 * It's purpose is to connect all the classes that are needed to run the program.
 */

const Server = require('./Server');
const Rover = require('./Rover');
const myServerConfig = require('../resource/serverConfiguration');
const myRoverConfig = require('../resource/roverConfiguration');
const server = new Server(myServerConfig);
const myRover = new Rover(myRoverConfig);


const main = async function main() {
    let obstacleCoordinates = null;

    await myRover.initializeRover(myRoverConfig);
    obstacleCoordinates = await myRover.scanThePlanetForObstacles();
    await myRover.loadRawMapInMemory(obstacleCoordinates);
};

main()
    .then(
        () => {
            server.setRouters(myRover);
            server.listen();
        }
    )
    .catch(error => {
        console.log('There was an error (during execution of async code):');
        console.log(error.message);
    });

