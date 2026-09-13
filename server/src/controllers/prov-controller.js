import Province from '../models/coordinate/Province.js';
import ProvDetail from '../models/detail/ProvDetail.js';

import client from '../utils/redis.js';

const limit = 3;

export async function provPage(req, res) {
  try {
    const count = await Province.countDocument();
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

export async function getProvByPage(req, res) {
  try {
    const { page = '1' } = req.query;
    const pageNumber = Number(page);

    if (!Number.isInteger(pageNumber) || pageNumber <= 0) {
      return res.status(404).send({
        message: 'Data Provinsi Tidak Ditemukan',
      });
    }

    const data = await Province.find()
      .skip((pageNumber - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    const stringifyJson = JSON.stringify(data);

    await client.set(`prov-${pageNumber}`, stringifyJson, { NX: true });

    return res.status(202).send(data);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getProvOnIsland(req, res) {
  const { island } = req.query;

  try {
    const count = await Province.countDocuments({
      island: island,
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

export async function getProvByIsland(req, res) {
  const { island, page = '1' } = req.query;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber <= 0) {
    return res.status(404).send({
      message: 'Data Provinsi Tidak Ditemukan',
    });
  }

  try {
    const data = await Province.find({
      island,
    })
      .skip((pageNumber - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    const stringifyJson = JSON.stringify(data);

    await client.set(`prov-${island}${pageNumber}`, stringifyJson, {
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

export async function getProvDetail(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).send({
        message: 'Id Provinsi Tidak Ditemukan',
      });
    }

    const detail = await ProvDetail.findOne({
      prov_id: id,
    });

    if (!detail) {
      return res.status(404).send({
        message: 'Informasi Provinsi Tidak Ditemukan',
      });
    }

    const data = {
      created: detail.date_created,
      province: detail.province,
      capital: detail.capital,
      long: detail.long_capital,
      lat: detail.lat_capital,
      desc: detail.description,
    };

    return res.status(202).send(data);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}

export async function getProvMap(req, res) {
  try {
    const { id } = req.params;

    const map = await Province.findById(id);

    if (!map) {
      return res.status(404).send({
        message: 'Denah Provinsi Tidak Ditemukan',
      });
    }

    const stringifyJson = JSON.stringify(map);

    await client.set(`prov-data-${id}`, stringifyJson, { NX: true });

    return res.status(202).send(map);
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: 'Terjadi Kesalahan Pada Server',
    });
  }
}
