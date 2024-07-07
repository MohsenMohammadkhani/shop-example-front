import axios from "axios";
import getEnvs from "../envs";
const BASE_URL = getEnvs()["API_URL"];

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
