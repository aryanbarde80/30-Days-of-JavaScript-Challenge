/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// var chunk = function(arr, size) {
//     let result = [] // blank array declaration

//     for(let i = 0; i < arr.length ; i+= size){
//         result.push(arr.slice(i,i + size))
//     }

//     return result
// };

var chunk = function(arr,size){
    const result = []
    
    while(arr.length>0){
        result.push(arr.splice(0,size));
    }
    return result
}
