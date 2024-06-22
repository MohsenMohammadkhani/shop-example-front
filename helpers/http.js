import axios from "axios";
const BASE_URL = process.env.API_URL;

const get = (url, config = {}) => {
  return axios.get(`${BASE_URL}${url}`, config);
};
const post = (url, param, config) => {
  return axios.post(`${BASE_URL}${url}`, param, config);
};

export default {
  get,
  post,
};
