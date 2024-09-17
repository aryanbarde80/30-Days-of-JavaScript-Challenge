var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let result = false;
    
    // Check if the key already exists
    if (this.cache.hasOwnProperty(key)) {
        // Cancel previous timeout
        clearTimeout(this.cache[key].timer);
        // Mark result as true if the key is still valid (unexpired)
        result = true;
    }

    // Set a new timeout for the key expiration
    let ref = this;
    let timeoutId = setTimeout(() => {
        delete ref.cache[key];
    }, duration);

    // Update the cache with the new value and timeout
    this.cache[key] = { val: value, timer: timeoutId };
    
    return result;
};

/** 
 * @param {number} key
 * @return {number} value associated with key, or -1 if key doesn't exist
 */
TimeLimitedCache.prototype.get = function(key) {
    if (!this.cache.hasOwnProperty(key)) {
        return -1;
    }
    return this.cache[key].val;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length;
};

/**
 * Example Usage:
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
