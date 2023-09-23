const city = require("../models/coordinate/City");

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
};
