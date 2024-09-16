/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cachedVal = {}
    return function(...args) {
        const val = args
        if(val in cachedVal){
            return cachedVal[val]
        } else {
            const result = fn(...args)
            cachedVal[val] = result
            return result
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */