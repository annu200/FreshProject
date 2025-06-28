import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com', // ← only domain, no /products
  timeout: 10000,
});

// 🔐 Request Interceptor
instance.interceptors.request.use(
  config => {
    // Add token if needed
    // const token = "YOUR_TOKEN_HERE";
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => Promise.reject(error),
);

// ⚠️ Response Interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    console.log('API Error:', error?.response?.status, error?.message);
    return Promise.reject(error);
  },
);

export default instance;
