import mongoose, { model } from 'mongoose';
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
});

const provgeo = model('provlatlong', ProvSchema, 'ProvLatLong');
export default provgeo;
