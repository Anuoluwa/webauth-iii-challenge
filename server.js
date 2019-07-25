require('dotenv').config();

import express from 'express';
import router from './auth/auth-routes'

const server = express();
server.use(express.json());
server.use('/api', router);

server.get('/', (req, res) => {
  res.json('Welcome AUTH API');
});

server.all('*', (req, res) => {
  res.json(`
      Sorry, no such route, try again!
    `);
});

export default server;