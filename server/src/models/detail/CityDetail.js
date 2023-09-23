const mongoose = require("mongoose");
const { Schema } = mongoose;

const CityDtlSchema = new Schema({
  city_id: Number,
  date_created: String,
  coordinates: { latitude: Number, longitude: Number },
  destinations: [
    {
      type: Schema.Types.ObjectId,
      ref: "destination",
    },
  ],
});

const citydtl = mongoose.model("citydtl", CityDtlSchema, "CityDetail");
module.exports = citydtl;
