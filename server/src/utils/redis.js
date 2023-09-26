const { createClient } = require("redis");
const port = 6379;
const client = createClient(port);

module.exports = client;
