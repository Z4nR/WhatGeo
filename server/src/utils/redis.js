const { createClient } = require('redis');

const client = createClient({
  url: `redis://default:${process.env.REDIS_PW}@${process.env.REDIS_HOST}:6379`,
});

module.exports = client;
