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

export { provPage, getProvByPage, provPageByIsle, getProvByIsle, getProvById };
