const Joi = require("joi");

module.exports = {
  detailValidate: (data) => {
    const detailSchema = Joi.object().keys({
      prov_id: Joi.number().required().label("Id Provinsi"),
      date_created: Joi.string().required().label("Tahun Berdiri"),
      capital: Joi.string().required().label("Nama Ibukota Provinsi"),
      lat_capital: Joi.number().required().label("Latitude Provinsi"),
      long_capital: Joi.number().required().label("Longitude Provinsi"),
      description: Joi.string().required().label("Penjelasan Singkat Provinsi"),
    });

    return detailSchema.validate(data);
  },

  destinyValidate: (data) => {
    const destinySchema = Joi.object().keys({
      place_name: Joi.string().required().label("Lokasi Liburan"),
      latitude: Joi.number().required().label("Latitude Lokasi"),
      longitude: Joi.number().required().label("Longitude Lokasi"),
      destiny_type: Joi.string().required().label("Jenis Lokasi Liburan"),
    });

    return destinySchema.validate(data);
  },
};
