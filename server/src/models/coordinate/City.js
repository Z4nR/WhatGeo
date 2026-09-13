import mongoose, { model } from 'mongoose';
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
});

const citygeo = model('citylatlong', CitySchema, 'CityLatLong');
export default citygeo;
