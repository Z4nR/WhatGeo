const prov = require('../models/coordinate/Province');
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

      console.log(data);
      await client.setEx(`prov-${page}`, 3600, JSON.stringify(data));

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

      client.setEx(`prov-${island}${page}`, 3600, JSON.stringify(data));

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

      client.setEx(`prov-${id}`, 3600, JSON.stringify(map));

      res.status(202).send(map);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },
};
