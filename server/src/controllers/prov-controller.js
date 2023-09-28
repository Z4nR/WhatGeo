const prov = require("../models/coordinate/Province");
const provDetail = require("../models/detail/ProvDetail");
const client = require("../utils/redis");

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
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
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
        res.status(404).send({ message: "Data Provinsi Tidak Ditemukan" });

      await client.setEx(`prov-${page}`, 3600, JSON.stringify(data));

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
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
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
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
        res.status(404).send({ message: "Data Provinsi Tidak Ditemukan" });

      client.setEx(`prov-${island}${page}`, 3600, JSON.stringify(data));

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  getProvDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const detail = await provDetail.findOne({ prov_id: id });
      if (!detail)
        return res
          .status(404)
          .send({ message: "Detail Provinsi Tidak Ditemukan" });

      res.status(202).send(detail);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },
};
