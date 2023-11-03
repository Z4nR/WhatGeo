const { createClient } = require('redis');
const client = createClient({ url: 'redis://redis:6379' });
//const client = createClient();

module.exports = client;
