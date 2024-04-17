
// Question: Create Dockerfile for Node app

    FROM node:14
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    CMD ["node", "server.js"]

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

// Question: Implement GraphQL resolver

    const resolvers = {
      Query: {
        user: (_, { id }) => db.users.find(u => u.id === id)
      },
      Mutation: {
        createUser: (_, { input }) => db.users.create(input)
      }
    };
