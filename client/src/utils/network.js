import { default as axios } from "axios";

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

export { provPage, getProvByPage };
