/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = []
    arr.forEach((value,index) => {
        if(fn(value,index)){
            newArr.push(value)
        }
    })
    return newArr;
};