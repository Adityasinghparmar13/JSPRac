
// Question: Implement throttle function

    function throttle(func, limit) {
      let lastFunc;
      let lastRan;
      return function(...args) {
        if(!lastRan) {
          func.apply(this, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(() => {
            if((Date.now() - lastRan) >= limit) {
              func.apply(this, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    }

// Question: Validate email with regex

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

// Question: Create HOC for authentication

    function withAuth(Component) {
      return props => {
        const isAuth = checkAuth();
        return isAuth ? <Component {...props} /> : <Login />;
      };
    }

// Question: Convert callback to promise

    function promisify(fn) {
      return (...args) => new Promise((resolve, reject) => {
        fn(...args, (err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    }
