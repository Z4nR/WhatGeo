const mongoose = require("mongoose");
const { Schema } = mongoose;

const CityDestinySchema = new Schema({
  place_name: String,
  latitude: Number,
  longitude: Number,
  destiny_type: String,
});

const destiny = mongoose.model("citydestiny", CityDestinySchema, "CityDestiny");
module.exports = destiny;
