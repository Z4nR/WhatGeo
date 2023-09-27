const { createClient } = require("redis");
const client = createClient({ url: "redis://redis:6379" });

module.exports = client;
