const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProvSchema = new Schema({
  _id: Number,
  provFeature: {
    type: {
      type: String,
      required: true,
    },
  },
  island: String,
  province: String,
  date_created: String,
  capital: String,
  lat_capital: Number,
  long_capital: Number,
  description: String,
});

const provgeo = mongoose.model("provlatlong", ProvSchema, "ProvLatLong");
module.exports = provgeo;
