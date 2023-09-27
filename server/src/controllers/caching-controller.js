const client = require("../utils/redis");

let pageNumber = 1;

module.exports = {
  cacheProvByPage: async (req, res, next) => {
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.get(`prov-${page}`);
      if (!data) return next();

      const parseData = JSON.parse(data);

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  cacheProvByIsland: async (req, res, next) => {
    const { island } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.get(`prov-${island}${page}`);
      if (!data) return next();

      const parseData = JSON.parse(data);

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  cacheCityByPage: async (req, res, next) => {
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.get(`city-${page}`);
      if (!data) return next();

      const parseData = JSON.parse(data);

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  cacheCityByProv: async (req, res, next) => {
    const { prov_id } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.get(`city-${prov_id}${page}`);
      if (!data) return next();

      const parseData = JSON.parse(data);

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },

  cacheCityByIsland: async (req, res, next) => {
    const { island } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.get(`city-${island}${page}`);
      if (!data) return next();

      const parseData = JSON.parse(data);

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Terjadi Kesalahan Pada Server" });
    }
  },
};
