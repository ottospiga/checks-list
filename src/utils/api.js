import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENV_TYPE
});

export default api;

