const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProvDtlSchema = new Schema({
  prov_id: Number,
  date_created: String,
  capital: String,
  coordinates: { latitude: Number, longitude: Number },
  description: String,
});

const provdtl = mongoose.model("provdtl", ProvDtlSchema, "ProvDetail");
module.exports = provdtl;
