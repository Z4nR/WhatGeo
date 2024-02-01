require('dotenv').config();

const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser');

const app = express(),
  db = require('./db'),
  route = require('./routes'),
  client = require('./utils/redis');

const env = process.env.NODE_ENV;
const port = process.env.PORT || 5000;

//Handling Console.log
if (env === 'development') {
  console.log = function () {};
}

//Middleware
app.use(bodyParser.json());
app.use(cors({ origin: '*', methods: ['GET'] }));

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
