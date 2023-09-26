const { createClient } = require("redis");

const client = createClient();

module.exports = client;
