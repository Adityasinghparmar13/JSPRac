
// Question: Deep clone object using JSON
let cloned = JSON.parse(JSON.stringify(original));

// Question: Flatten nested array recursively

    function flatten(arr) {
      return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }
