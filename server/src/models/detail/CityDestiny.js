import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const CityDestinySchema = new Schema({
  place_name: String,
  latitude: Number,
  longitude: Number,
  destiny_type: String,
});

const destiny = model('citydestiny', CityDestinySchema, 'CityDestiny');
export default destiny;
