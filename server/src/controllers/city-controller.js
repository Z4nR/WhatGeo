import City from '../models/coordinate/City.js';
import CityDetail from '../models/detail/CityDetail.js';
import '../models/detail/CityDestiny.js';

import client from '../utils/redis.js';

const limit = 5;

export async function cityPage(req, res) {
  try {
    const count = await City.countDocuments();
    const total = Math.ceil(count / limit);

    return res.status(202).send({
      page: total,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getCityByPage(req, res) {
  try {
    const { page } = req.query;
    const pageNumber = Number(page);

    if (!Number.isInteger(pageNumber) || pageNumber <= 0) {
      return res.status(404).send({
        message: 'Data Kota Tidak Ditemukan',
      });
    }

    const data = await City.find()
      .skip((pageNumber - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    const stringifyJson = JSON.stringify(data);

    await client.set(`city-${pageNumber}`, stringifyJson, { NX: true });

    return res.status(202).send(data);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getCityOnProv(req, res) {
  const { prov_id } = req.query;

  try {
    const count = await City.countDocuments({
      prov_id,
    });

    const total = Math.ceil(count / limit);

    return res.status(202).send({
      page: total,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getCityByProv(req, res) {
  const { prov_id, page } = req.query;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber <= 0) {
    return res.status(404).send({
      message: 'Data Kota Tidak Ditemukan',
    });
  }

  try {
    const data = await City.find({
      prov_id,
    })
      .skip((pageNumber - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    const stringifyJson = JSON.stringify(data);

    await client.set(`city-${prov_id}${pageNumber}`, stringifyJson, {
      NX: true,
    });

    return res.status(202).send(data);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getCityOnIsland(req, res) {
  const { island } = req.query;

  try {
    const count = await City.countDocuments({
      island,
    });

    const total = Math.ceil(count / limit);

    return res.status(202).send({
      page: total,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getCityByIsland(req, res) {
  const { island, page } = req.query;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber <= 0) {
    return res.status(404).send({
      message: 'Data Kota Tidak Ditemukan',
    });
  }

  try {
    const data = await City.find({
      island,
    })
      .skip((pageNumber - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    const stringifyJson = JSON.stringify(data);

    await client.set(`city-${island}${pageNumber}`, stringifyJson, {
      NX: true,
    });

    return res.status(202).send(data);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getCityMap(req, res) {
  try {
    const { id } = req.params;

    const map = await City.findById(id);

    if (!map) {
      return res.status(404).send({
        message: 'Denah Kab/Kota Tidak Ditemukan',
      });
    }

    const stringifyJson = JSON.stringify(map);

    await client.set(`city-data-${id}`, stringifyJson, { NX: true });

    return res.status(202).send(map);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getCityDetail(req, res) {
  try {
    const { id } = req.params;

    const city = await CityDetail.findOne({
      city_id: id,
    }).populate({
      path: 'destinations',
      options: {
        sort: {
          place_name: 1,
        },
      },
    });

    if (!city) {
      return res.status(404).send({
        message: 'Data lokasi liburan tidak ditemukan',
      });
    }

    const destiny = city.destinations.map((d) => ({
      place_name: d.place_name,
      latitude: d.latitude,
      longitude: d.longitude,
      destiny_type: d.destiny_type,
    }));

    return res.status(202).send({
      type: city.type,
      city: city.city,
      created: city.date_created,
      lat: city.lat_city,
      long: city.long_city,
      slogan: city.slogan,
      district: city.district_total,
      district_detail: city.district_data,
      destinations: destiny,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}
