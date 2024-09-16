/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = []
    arr.forEach((value, index) => {
        newArr.push(fn(value,index))
    })
    return newArr
};