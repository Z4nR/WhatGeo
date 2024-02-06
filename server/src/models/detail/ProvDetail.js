const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProvDetailSchema = new Schema({
  prov_id: Number,
  date_created: String,
  province: String,
  capital: String,
  lat_capital: Number,
  long_capital: Number,
  description: String,
});

const provdtl = mongoose.model('provdetail', ProvDetailSchema, 'ProvDetail');
module.exports = provdtl;
