const city = require('../models/coordinate/City');
const cityDetail = require('../models/detail/CityDetail.js');
require('../models/detail/CityDestiny');
const client = require('../utils/redis.js');

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
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
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
        res.status(404).send({ message: 'Data Kota Tidak Ditemukan' });

      const stringifyJson = JSON.stringify(data);
      client.set(`city-${page}`, stringifyJson, { NX: true });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
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
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
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
        res.status(404).send({ message: 'Data Kota Tidak Ditemukan' });

      const stringifyJson = JSON.stringify(data);
      client.set(`city-${prov_id}${page}`, stringifyJson, { NX: true });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
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
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
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
        res.status(404).send({ message: 'Data Kota Tidak Ditemukan' });

      const stringifyJson = JSON.stringify(data);
      client.set(`city-${island}${page}`, stringifyJson, { NX: true });

      res.status(202).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  getCityMap: async (req, res) => {
    try {
      const { id } = req.params;
      const map = await city.findById(id);
      if (!map)
        return res
          .status(404)
          .send({ message: 'Denah Kab/Kota Tidak Ditemukan' });

      const stringifyJson = JSON.stringify(map);
      client.set(`city-data-${id}`, stringifyJson, { NX: true });

      res.status(202).send(map);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },

  getCityDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const city = await cityDetail.findOne({ city_id: id }).populate({
        path: 'destinations',
        options: { sort: { place_name: 1 } },
      });
      if (!city)
        return res
          .status(404)
          .send({ message: 'Data lokasi liburan tidak ditemukan' });

      const destiny = city.destinations.map((d) => {
        return {
          place_name: d.place_name,
          latitude: d.latitude,
          longitude: d.longitude,
          destiny_type: d.destiny_type,
        };
      });

      res.status(202).send({
        city: city.city,
        date_created: city.date_created,
        lat_city: city.lat_city,
        long_city: city.long_city,
        description: city.description,
        destinations: destiny,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Terjadi Kesalahan Pada Server' });
    }
  },
};
