const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema({
  _id: Number,
  prov_id: Number,
  city: String,
  cityFeature: {
    type: {
      type: String,
      required: true,
    },
  },
  island: String,
  destinations: [
    {
      type: Schema.Types.ObjectId,
      ref: "citydestiny",
    },
  ],
});

const citygeo = mongoose.model("citylatlong", CitySchema, "CityLatLong");
module.exports = citygeo;
