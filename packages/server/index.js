import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

import typeDefs from '@src/typeDefs';
import resolvers from '@src/resolvers';
import '@src/mongoose';

const app = express();
const port = 4000;
const SECRET = process.env.SECRET;

const addUser = async (req) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const { user } = await jwt.verify(token, SECRET);
      req.user = user;
    } catch (err) {
      console.log(err.name, err.message);
      if (err.name === 'TokenExpiredError') {
        req.error = err.name;
      }
    }
  }
  req.next();
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  // dataSources: () => ({
  //   geekAPI: new GeekAPI(),
  // }),
  context: ({ req }) => ({
    user: req.user,
    error: req.error,
    SECRET: SECRET,
  }),
});

app.listen({ port }, () => {
  console.log(`🚀 Server at http://localhost:${port}${server.graphqlPath}`);
});

app.use(addUser);
server.applyMiddleware({ app });