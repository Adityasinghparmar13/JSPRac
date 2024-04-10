
// Question: Flatten nested array recursively

    function flatten(arr) {
      return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }

// Question: Memoize function results

    function memoize(fn) {
      let cache = {};
      return (...args) => {
        let key = JSON.stringify(args);
        return key in cache ? cache[key] : (cache[key] = fn(...args));
      };
    }
