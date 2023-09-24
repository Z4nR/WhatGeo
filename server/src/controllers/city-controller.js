const city = require("../models/coordinate/City");
const cityDestiny = require("../models/detail/CityDestiny");
const { destinyValidate } = require("../utils/validate");

let pageNumber = 1;
const limit = 5;

module.exports = {
  cityPage: async (req, res) => {
    try {
      const count = await city.count();
      const total = Math.ceil(count / Number.parseInt(limit));

      res.status(202).send({ page: total });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  getCityByPage: async (req, res) => {
    try {
      const { page } = req.query;
      if (!Number.isNaN(page) && page > 0) pageNumber = page;

      const data = await city
        .find()
        .skip((pageNumber - 1) * limit)
        .limit(limit)
        .sort({ _id: 1 });

      if (page <= 0)
        res.status(404).send({ message: "Data Kota Tidak Ditemukan" });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  getCityOnProv: async (req, res) => {
    const { prov_id } = req.query;
    try {
      const count = await city.find({ prov_id: prov_id }).count();
      const total = Math.ceil(count / Number.parseInt(limit));

      res.status(202).send({ page: total });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  getCityByProv: async (req, res) => {
    const { prov_id } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await city
        .find({ prov_id: prov_id })
        .skip((pageNumber - 1) * limit)
        .limit(limit)
        .sort({ _id: 1 });

      if (page <= 0)
        res.status(404).send({ message: "Data Kota Tidak Ditemukan" });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  getCityOnIsland: async (req, res) => {
    const { island } = req.query;
    try {
      const count = await city.find({ island: island }).count();
      const total = Math.ceil(count / Number.parseInt(limit));

      res.status(202).send({ page: total });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  getCityByIsland: async (req, res) => {
    const { island } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await city
        .find({ island: island })
        .skip((pageNumber - 1) * limit)
        .limit(limit)
        .sort({ _id: 1 });

      if (page <= 0)
        res.status(404).send({ message: "Data Kota Tidak Ditemukan" });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  addCityDestiny: async (req, res) => {
    try {
      const { id } = req.params;
      const town = await city.findById(id);
      if (!town)
        return res.status(404).send({ message: "Kab/Kota Tidak Ditemukan" });

      const { error } = destinyValidate(req.body);
      if (error)
        return res.status(400).send({ message: error.details[0].message });

      const name = await cityDestiny.findOne({
        place_name: req.body.place_name,
      });
      if (name)
        return res.status(409).send({ message: "Lokasi Liburan Sudah Ada" });

      const destiny = new cityDestiny(req.body);
      await destiny.save();

      town.destinations.push(destiny);
      await town.save();

      res.status(202).send({ message: "Lokasi Liburan Berhasil Ditambahkan" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  updateCityDestiny: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) res.status(404).send({ message: "Data Tidak Ditemukan" });

      await cityDestiny.findByIdAndUpdate(id, req.body);
      res.status(202).send({ message: "Lokasi Liburan Berhasil Diperbarui" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },
};
