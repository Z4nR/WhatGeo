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
  detail: {
    type: Schema.Types.ObjectId,
    ref: "provdetail",
  },
});

const provgeo = mongoose.model("provlatlong", ProvSchema, "ProvLatLong");
module.exports = provgeo;
