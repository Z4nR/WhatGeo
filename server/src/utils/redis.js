const { createClient } = require('redis');
//const client = createClient({ url: 'redis://redis:6379' });
const client = createClient({ url: 'redis://34.31.156.141:6379' });
//const client = createClient();

module.exports = client;
