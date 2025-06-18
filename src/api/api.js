import axios from 'axios';
import Config from 'react-native-config';
console.log('API URL:', Config.API_URL);

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log('api request error--->', error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log('url::', Config.API_URL);
    console.log('api response error---->', error);
    return Promise.reject(error);
  },
);
export default api;
