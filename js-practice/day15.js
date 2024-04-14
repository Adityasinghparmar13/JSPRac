
// Question: Implement Redux middleware

    const loggerMiddleware = store => next => action => {
      console.log('Dispatching:', action);
      let result = next(action);
      console.log('New state:', store.getState());
      return result;
    };

// Question: Create TypeScript decorator

    function log(target, key, descriptor) {
      const original = descriptor.value;
      descriptor.value = function(...args) {
        console.log('Called:', key);
        return original.apply(this, args);
      };
      return descriptor;
    }

// Question: Build Webpack configuration

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [{ test: /\.js$/, use: 'babel-loader' }]
      }
    };

// Question: Implement GraphQL resolver

    const resolvers = {
      Query: {
        user: (_, { id }) => db.users.find(u => u.id === id)
      },
      Mutation: {
        createUser: (_, { input }) => db.users.create(input)
      }
    };

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

// Question: Create WebAssembly module

    (async () => {
      const response = await fetch('module.wasm');
      const buffer = await response.arrayBuffer();
      const module = await WebAssembly.instantiate(buffer);
      console.log(module.exports.add(2,3));
    })();
