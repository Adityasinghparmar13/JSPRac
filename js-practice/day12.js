
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

// Question: Implement LRU cache

    class LRUCache {
      constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
      }
      get(key) {
        if(!this.cache.has(key)) return -1;
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
      }
      put(key, value) {
        if(this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        if(this.cache.size > this.capacity) 
          this.cache.delete(this.cache.keys().next().value);
      }
    }

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

// Question: Create HOC for authentication

    function withAuth(Component) {
      return props => {
        const isAuth = checkAuth();
        return isAuth ? <Component {...props} /> : <Login />;
      };
    }

// Question: Create custom event emitter

    class EventEmitter {
      constructor() { this.events = {}; }
      on(event, listener) {
        (this.events[event] || (this.events[event] = [])).push(listener);
      }
      emit(event, ...args) {
        (this.events[event] || []).forEach(listener => listener(...args));
      }
    }
