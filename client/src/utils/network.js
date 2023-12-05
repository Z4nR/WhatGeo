import axios from 'axios';

const base_url = import.meta.env.VITE_API;

const provPage = async () => {
  return axios.get(`${base_url}/prov/page`).then((response) => {
    const data = response.data;
    return data.page;
  });
};

const getProvByPage = async (page) => {
  return axios.get(`${base_url}/prov?page=${page}`).then((response) => {
    const data = response.data;
    return data;
  });
};

const provPageByIsle = async (island) => {
  return axios
    .get(`${base_url}/prov/isle/page?island=${island}`)
    .then((response) => {
      const data = response.data;
      return data.page;
    });
};

const getProvByIsle = async (island, page) => {
  return axios
    .get(`${base_url}/prov/isle?island=${island}&page=${page}`)
    .then((response) => {
      const data = response.data;
      return data;
    });
};

const getProvById = async (id) => {
  return axios.get(`${base_url}/prov/${id}/map`).then((response) => {
    const data = response.data;
    return data;
  });
};

const cityPage = async () => {
  return axios.get(`${base_url}/city/page`).then((response) => {
    const data = response.data;
    return data.page;
  });
};

const getCityByPage = async (page) => {
  return axios.get(`${base_url}/city?page=${page}`).then((response) => {
    const data = response.data;
    return data;
  });
};

const cityPageByIsle = async (island) => {
  return axios
    .get(`${base_url}/city/isle/page?island=${island}`)
    .then((response) => {
      const data = response.data;
      return data.page;
    });
};

const getCityByIsle = async (island, page) => {
  return axios
    .get(`${base_url}/city/isle?island=${island}&page=${page}`)
    .then((response) => {
      const data = response.data;
      return data;
    });
};

const cityPageByProv = async (prov) => {
  return axios
    .get(`${base_url}/city/prov/page?prov_id=${prov}`)
    .then((response) => {
      const data = response.data;
      return data.page;
    });
};

const getCityByProv = async (prov, page) => {
  return axios
    .get(`${base_url}/city/prov?prov_id=${prov}&page=${page}`)
    .then((response) => {
      const data = response.data;
      return data;
    });
};

const getCityById = async (id) => {
  return axios.get(`${base_url}/city/${id}/map`).then((response) => {
    const data = response.data;
    return data;
  });
};

export {
  provPage,
  getProvByPage,
  provPageByIsle,
  getProvByIsle,
  getProvById,
  cityPage,
  getCityByPage,
  cityPageByIsle,
  getCityByIsle,
  cityPageByProv,
  getCityByProv,
  getCityById,
};
