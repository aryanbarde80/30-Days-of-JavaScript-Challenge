/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);  // Call the function immediately

    const intervalId = setInterval(() => {
        fn(...args);
    }, t);  // Set interval to call the function repeatedly

    const cancelFn = () => {
        clearInterval(intervalId);  // Clear the interval when called
    };

    return cancelFn;  // Return the cancellation function
};

/**
 * Example usage:
 *  const result = [];
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);  // Cancel after 190ms
 *   
 *  setTimeout(() => {
 *      console.log(result); // Expected output:
 *      // [
 *      //     {"time":0,"returned":8},
 *      //     {"time":35,"returned":8},
 *      //     {"time":70,"returned":8},
 *      //     {"time":105,"returned":8},
 *      //     {"time":140,"returned":8},
 *      //     {"time":175,"returned":8}
 *      // ]
 *  }, cancelTimeMs + t + 15);
 */
