import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import bodyParser from 'body-parser';
const { json } = bodyParser;

import db from './db.js';
import route from './routes.js';
import redis from './utils/redis.js';

const app = express();

const port = 5000;

//Middleware
app.use(json());
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
      await redis.connect();
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
