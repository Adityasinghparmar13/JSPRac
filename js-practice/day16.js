
// Question: Create Dockerfile for Node app

    FROM node:14
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    CMD ["node", "server.js"]

// Question: Write Jest test suite

    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1,2)).toBe(3);
    });
