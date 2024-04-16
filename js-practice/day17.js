
// Question: Optimize React rendering with memo

    const MemoComponent = React.memo(({ prop }) => {
      return <div>{prop}</div>;
    });

// Question: Create TypeScript decorator

    function log(target, key, descriptor) {
      const original = descriptor.value;
      descriptor.value = function(...args) {
        console.log('Called:', key);
        return original.apply(this, args);
      };
      return descriptor;
    }

// Question: Implement Redux middleware

    const loggerMiddleware = store => next => action => {
      console.log('Dispatching:', action);
      let result = next(action);
      console.log('New state:', store.getState());
      return result;
    };
