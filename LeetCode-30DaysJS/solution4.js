/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currNum = init
    
    return {
        increment : () => {
            return ++currNum // We have to return the value with increasing not increasing before returning
        },

        decrement : () => {
            return --currNum
        },

        reset : () => {
            currNum = init
            return currNum
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */