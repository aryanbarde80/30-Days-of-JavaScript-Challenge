/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Promise 1 when resolves, gives a value1 and similarly Promise 2 also and at the end we have to return the sum of these values

    const val1 = await promise1
    const val2 = await promise2

    return val1 + val2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */