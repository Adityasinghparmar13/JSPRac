
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

// Question: Implement CI/CD pipeline

    # .github/workflows/main.yml
    name: CI/CD
    on: [push]
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v2
        - run: npm install
        - run: npm test
