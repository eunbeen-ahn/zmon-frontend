import axios from 'axios';

const index = axios.create({
  baseURL: 'https://reqres.in/api/',
});

index.interceptors.request.use((config) => {
  // config.params = config.params || {};
  return config;
});

export const dummyApi = {
  list: () => index.get('product'),
};
