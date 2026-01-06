const { createClient } = require('redis');

const client = createClient({
  url: `redis://:${process.env.REDIS_PW}@${process.env.REDIS_HOST}:6379`,
  socket: {
    reconnectStrategy: (retries) => {
      console.log('Redis retry:', retries);
      return Math.min(retries * 100, 3000);
    },
  },
});

client.on('error', (err) => console.error('Redis Error:', err));
client.on('connect', () => console.log('Redis connected'));
client.on('ready', () => console.log('Redis ready'));

module.exports = client;
