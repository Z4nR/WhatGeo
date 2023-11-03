const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  swaggerJsdoc = require('swagger-jsdoc'),
  swaggerUi = require('swagger-ui-express');

const app = express(),
  db = require('./db'),
  route = require('./routes'),
  client = require('./utils/redis'),
  swaggerOptions = require('./utils/swagger');

require('dotenv').config();

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

//Redis logging
client.on('error', (err) => {
  console.log(err);
});

const redisConnect = async () => {
  return await client.connect();
};

redisConnect();

//DB Connection
db();

//Swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    customCss: '.swagger-ui>.topbar { display: none }',
    customSiteTitle: 'WhatGeo Documentation',
  })
);

//Listen Port
app.listen(port, () => {
  console.log(`Litening on port ${port}...`);
});
