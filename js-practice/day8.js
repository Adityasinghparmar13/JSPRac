
// Question: Destructure array elements
let [first, second] = [1,2,3]; console.log(first);

// Question: Destructure object properties
let {name} = person; console.log(name);

// Question: Use ternary operator
let isAdult = age >= 18 ? 'Yes' : 'No';

// Question: Create a promise that resolves

    let promise = new Promise((resolve) => {
      setTimeout(() => resolve('Done'), 1000);
    });
