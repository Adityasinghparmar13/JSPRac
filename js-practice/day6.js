
// Question: Use Date object to get current year
console.log(new Date().getFullYear());

// Question: Handle division by zero with try/catch

    try {
      let result = 10/0;
      if(!isFinite(result)) throw 'Division error';
    } catch(e) {
      console.error(e);
    }

// Question: Create a class with a constructor

    class Car {
      constructor(brand) { this.brand = brand; }
    }
    let myCar = new Car('Toyota');

// Question: Generate random number between 1-100
console.log(Math.floor(Math.random() * 100) + 1);
