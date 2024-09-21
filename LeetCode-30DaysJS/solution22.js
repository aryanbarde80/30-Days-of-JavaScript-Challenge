/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    // Array -> builtin object
    // prototype -> allows to apply properties to built in objects and we can use references in it like this

    // if(this.length == 0){
    //     return -1;
    // }
    // return this[this.length-1]

    // this here refers to the current context that is array here

    // T.C of this is O(1) bcoz we didn't made any new data structure here

    // solution using ternary operator
    return this.length ? this[this.length-1] : -1

};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
