const Joi = require("joi");

module.exports = {
  detailValidate: (data) => {
    const detailSchema = Joi.object().keys({
      prov_id: Joi.number().required().label("Id Provinsi"),
      date_created: Joi.string().required().label("Tahun Berdiri"),
      capital: Joi.string().required().label("Nama Ibukota Provinsi"),
      coordinates: Joi.object().keys({
        latitude: Joi.number().required().label("Latitude Provinsi"),
        longitude: Joi.number().required().label("Longitude Provinsi"),
      }),
      description: Joi.string().required().label("Penjelasan Singkat Provinsi"),
    });

    return detailSchema.validate(data);
  },
};
