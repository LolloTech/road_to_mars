'use strict';

/**
 * The purpose of this class is to expose some useful utilities function, that can be called statically from everywhere
 * the class is imported.
 */

class Utils {

    /**
     * A function that "awaits" a given timeout, to call the function "givenfunction" passed as parameter, and then
     * executes it. We will use this function to simulate the working time
     * of the sensors of the rover: every mechanical device needs a certain amount of time to fulfill it's function!
     * @param givenFunction - the given function, as a parameter
     * @param givenParam - the parameters of the given function
     * @param microsecsTimeout - the timeout that sleep() needs to "await" to execute this function
     * @returns {Promise<*>}
     */
    static async sleep(givenFunction, givenParam = null, microsecsTimeout = 0) {
        return new Promise((resolve) => {
            // wait 3s before calling fn(par)
            setTimeout(() => resolve(givenFunction(givenParam)), microsecsTimeout);
        });
    }


    /**
     * With this method, we will simulate (very, very badly) a low propability distribution. It is based on Math.random
     * that uses a uniform probability distribution. We will just "enlarge" the probability distribution, and check
     * if a precise random number does appear.
     * (Here, probability is use insted of "frequency" keyword. In reality the thing that we look upon, is the low
     * frequency of appereance of the number 10, in the uniformly distrubuited distribution from 1 to 10 simulated by
     * Math.random).
     * @returns {boolean}: the given number is 10?
     */
    static lowProbabilityEvent() {
        const result = ~~(Math.random() * 11) % 10;

        // console.log(result);
        return result === 0;
    }

}

module.exports = Utils;
