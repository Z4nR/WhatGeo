const mongoose = require('mongoose');
const { Schema } = mongoose;

const CityDetailSchema = new Schema({
  city_id: Number,
  city: String,
  date_created: String,
  lat_city: Number,
  long_city: Number,
  description: String,
  destinations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'citydestiny',
    },
  ],
});

const citydtl = mongoose.model('citydetail', CityDetailSchema, 'CityDetail');
module.exports = citydtl;
