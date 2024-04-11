
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
