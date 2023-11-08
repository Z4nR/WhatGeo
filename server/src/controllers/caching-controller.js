const client = require('../utils/redis');

let pageNumber = 1;

module.exports = {
  cacheProvByPage: async (req, res, next) => {
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.getEx(`prov-${page}`, { EX: 3600 });

      const parseData = JSON.parse(data);

      if (!parseData || parseData.length === 0) {
        console.log(`Data prov-${page} tidak ditemukan`);
        return next();
      }

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  cacheProvByIsland: async (req, res, next) => {
    const { island } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.getEx(`prov-${island}${page}`, { EX: 3600 });

      const parseData = JSON.parse(data);

      if (!parseData || parseData.length === 0) {
        console.log(`Data prov-${island}${page} tidak ditemukan`);
        return next();
      }

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  cacheProvMap: async (req, res, next) => {
    const { id } = req.params;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.getEx(`prov-${id}`, { EX: 3600 });

      const parseData = JSON.parse(data);

      if (!parseData || parseData.length === 0) {
        console.log(`Data prov-${id} tidak ditemukan`);
        return next();
      }

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  cacheCityByPage: async (req, res, next) => {
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.getEx(`city-${page}`, { EX: 3600 });

      const parseData = JSON.parse(data);

      if (!parseData || parseData.length === 0) {
        console.log(`Data city-${page} tidak ditemukan`);
        return next();
      }

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  cacheCityByProv: async (req, res, next) => {
    const { prov_id } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.getEx(`city-${prov_id}${page}`, { EX: 3600 });

      const parseData = JSON.parse(data);

      if (!parseData || parseData.length === 0) {
        console.log(`Data city-${prov_id}${page} tidak ditemukan`);
        return next();
      }

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  cacheCityByIsland: async (req, res, next) => {
    const { island } = req.query;
    const { page } = req.query;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.getEx(`city-${island}${page}`, { EX: 3600 });

      const parseData = JSON.parse(data);

      if (!parseData || parseData.length === 0) {
        console.log(`Data city-${island}${page} tidak ditemukan`);
        return next();
      }

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  cacheCityMap: async (req, res, next) => {
    const { id } = req.params;
    if (!Number.isNaN(page) && page > 0) pageNumber = page;

    try {
      const data = await client.getEx(`city-${id}`, { EX: 3600 });

      const parseData = JSON.parse(data);

      if (!parseData || parseData.length === 0) {
        console.log(`Data city-${id} tidak ditemukan`);
        return next();
      }

      res.status(202).send(parseData);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },
};
