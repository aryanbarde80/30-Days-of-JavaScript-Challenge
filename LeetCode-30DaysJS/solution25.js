/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = new Map()

    for(const obj of arr1){
        map.set(obj.id,{...obj})
    }

    for(const obj of arr2){
        const exist = map.get(obj.id)
        if(exist){
            Object.assign(exist,obj) // override logic
        }
        else{
            map.set(obj.id,{...obj})
        }
    }
    return [...map.values()].sort((a,b) => a.id - b.id)
};