const { createClient } = require("redis");
const client = createClient({ url: "0.0.0.0" });

module.exports = client;
