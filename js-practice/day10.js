
// Question: Create a new div element
document.createElement('div');

// Question: Implement array chunking function

    function chunkArray(arr, size) {
      return Array.from({length: Math.ceil(arr.length/size)}, (_,i) => 
        arr.slice(i*size, i*size+size));
    }
