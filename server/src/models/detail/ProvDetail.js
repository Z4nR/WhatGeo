const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProvDetailSchema = new Schema({
  date_created: String,
  capital: String,
  latitude: Number,
  longitude: Number,
  description: String,
});

const provdtl = mongoose.model("provdetail", ProvDetailSchema, "ProvDetail");
module.exports = provdtl;
