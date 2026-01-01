require('dotenv').config();

const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser');

const app = express(),
  db = require('./db'),
  route = require('./routes'),
  client = require('./utils/redis');

const port = 5000;

//Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

//Route
app.use('/v1', route);

const connectRedisWithRetry = async () => {
  let retries = 10;

  while (retries) {
    try {
      await client.connect();
      console.log('Redis connected');
      return;
    } catch (err) {
      console.log(`Retry Redis... (${retries})`);
      retries--;
      await new Promise((res) => setTimeout(res, 2000));
    }
  }

  throw new Error('Redis connection failed');
};

const startServer = async () => {
  try {
    console.log('Connecting to Redis...');
    await connectRedisWithRetry();

    console.log('Connecting to DB...');
    await db();

    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  } catch (err) {
    console.error('Startup failed:', err);
    process.exit(1); // biar docker restart
  }
};

startServer();
