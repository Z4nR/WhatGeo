const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  try {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DB_CONNECTION, connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Couldn't connect to database");
  }
};
