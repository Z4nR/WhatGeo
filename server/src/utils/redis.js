const { createClient } = require('redis');
//const client = createClient({ url: 'redis://redis:6379' });
const client = createClient({
  url: `redis://default:${process.env.REDIS_PW}@${process.env.REDIS_HOST}:6379`,
});
//const client = createClient();

module.exports = client;
