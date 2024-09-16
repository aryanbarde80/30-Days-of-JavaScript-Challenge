/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init // Storing the initial value
    if(nums.length === 0){
        // given condition
        return init
    } else {
        nums.forEach((nums) => {
            val = fn(val,nums)
        })
    }
    return val
};