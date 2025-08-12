require('dotenv').config();

const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser');

const app = express(),
  db = require('./db'),
  route = require('./routes'),
  client = require('./utils/redis');

const port = 5500;

//Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

//Route
app.use('/v1', route);

//DB Connection
db();

//Redis logging
client.on('error', (err) => {
  console.log(err);
});

const redisConnect = async () => {
  return await client.connect();
};

redisConnect();

//Listen Port
app.listen(port, () => {
  console.log(`Litening on port ${port}...`);
});
