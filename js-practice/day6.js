
// Question: Use Date object to get current year
console.log(new Date().getFullYear());

// Question: Handle division by zero with try/catch

    try {
      let result = 10/0;
      if(!isFinite(result)) throw 'Division error';
    } catch(e) {
      console.error(e);
    }
