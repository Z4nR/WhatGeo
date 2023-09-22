const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser");
(app = express()), ((db = require("./db")), (route = require("./route")));

require("dotenv").config();

const env = process.env.NODE_ENV;
const port = process.env.PORT || 5000;

//Handling Console.log
if (env === "development") {
  console.log = function () {};
}

//Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "*", methods: ["GET"] }));

//Route
app.use("/v1", route);

//DB Connection
db();

//Listen Port
app.listen(port, () => {
  console.log(`Litening on port ${port}...`);
});
