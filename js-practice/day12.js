
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

// Question: Create reusable fetch wrapper

    async function fetchData(url) {
      try {
        const response = await fetch(url);
        return await response.json();
      } catch(error) {
        console.error('Fetch failed:', error);
      }
    }

// Question: Create observable with subscribers

    class Observable {
      constructor() { this.subscribers = []; }
      subscribe(fn) { this.subscribers.push(fn); }
      next(val) { this.subscribers.forEach(fn => fn(val)); }
    }
