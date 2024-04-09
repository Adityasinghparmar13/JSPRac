
// Question: Deep clone object using JSON
let cloned = JSON.parse(JSON.stringify(original));

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

// Question: Create observable with subscribers

    class Observable {
      constructor() { this.subscribers = []; }
      subscribe(fn) { this.subscribers.push(fn); }
      next(val) { this.subscribers.forEach(fn => fn(val)); }
    }

// Question: Implement binary search

    function binarySearch(arr, target) {
      let left = 0, right = arr.length-1;
      while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target) return mid;
        arr[mid] < target ? left = mid+1 : right = mid-1;
      }
      return -1;
    }

// Question: Deep clone object using JSON
let cloned = JSON.parse(JSON.stringify(original));

// Question: Memoize function results

    function memoize(fn) {
      let cache = {};
      return (...args) => {
        let key = JSON.stringify(args);
        return key in cache ? cache[key] : (cache[key] = fn(...args));
      };
    }

// Question: Create observable with subscribers

    class Observable {
      constructor() { this.subscribers = []; }
      subscribe(fn) { this.subscribers.push(fn); }
      next(val) { this.subscribers.forEach(fn => fn(val)); }
    }

// Question: Flatten nested array recursively

    function flatten(arr) {
      return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }

// Question: Debounce function implementation

    function debounce(func, delay) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    }
