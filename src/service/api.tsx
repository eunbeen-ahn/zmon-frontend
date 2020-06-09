import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
});

api.interceptors.request.use((config) => {
  // config.params = config.params || {};
  return config;
});

export const dummyApi = {
  list: () => api.get('product'),
};
