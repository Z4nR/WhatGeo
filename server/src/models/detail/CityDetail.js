import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const CityDetailSchema = new Schema({
  city_id: Number,
  type: String,
  city: String,
  date_created: String,
  lat_city: Number,
  long_city: Number,
  slogan: String,
  district_total: Number,
  district_data: String,
  destinations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'citydestiny',
    },
  ],
});

const citydtl = model('citydetail', CityDetailSchema, 'CityDetail');
export default citydtl;
