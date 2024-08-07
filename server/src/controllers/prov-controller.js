const prov = require('../models/coordinate/Province');
const provDetail = require('../models/detail/ProvDetail');
const client = require('../utils/redis');

let pageNumber = 1;
const limit = 3;

module.exports = {
  provPage: async (req, res) => {
    try {
      const count = await prov.count();
      const total = Math.ceil(count / Number.parseInt(limit));

      res.status(202).send({ page: total });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  getProvByPage: async (req, res) => {
    try {
      const { page } = req.query;
      if (!Number.isNaN(page) && page > 0) pageNumber = page;

      const data = await prov
        .find()
        .skip((pageNumber - 1) * limit)
        .limit(limit)
        .sort({ _id: 1 });

      if (page <= 0)
        res.status(404).send({ message: 'Data Provinsi Tidak Ditemukan' });

      const stringifyJson = JSON.stringify(data);
      await client.set(`prov-${page}`, stringifyJson, { NX: true });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  getProvOnIsland: async (req, res) => {
    const { island } = req.query;
    try {
      const count = await prov.find({ island: island }).count();
      const total = Math.ceil(count / Number.parseInt(limit));

      res.status(202).send({ page: total });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  getProvByIsland: async (req, res) => {
    const { island } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await prov
        .find({ island: island })
        .skip((pageNumber - 1) * limit)
        .limit(limit)
        .sort({ _id: 1 });

      if (page <= 0)
        res.status(404).send({ message: 'Data Provinsi Tidak Ditemukan' });

      const stringifyJson = JSON.stringify(data);
      client.set(`prov-${island}${page}`, stringifyJson, { NX: true });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  getProvDetail: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) res.status(404).send({ message: 'Id Provinsi Tidak Ditemukan' });

      const detail = await provDetail.findOne({ prov_id: id });
      if (!detail)
        return res
          .status(404)
          .send({ message: 'Informasi Provinsi Tidak Ditemukan' });

      const data = {
        created: detail.date_created,
        province: detail.province,
        capital: detail.capital,
        long: detail.long_capital,
        lat: detail.lat_capital,
        desc: detail.description,
      };

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  getProvMap: async (req, res) => {
    try {
      const { id } = req.params;
      const map = await prov.findById(id);
      if (!map)
        return res
          .status(404)
          .send({ message: 'Denah Provinsi Tidak Ditemukan' });

      const stringifyJson = JSON.stringify(map);
      client.set(`prov-data-${id}`, stringifyJson, { NX: true });

      res.status(202).send(map);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },
};
