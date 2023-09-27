const { createClient } = require("redis");
const client = createClient({ url: "redis://localhost:6379" });

module.exports = client;
W;
