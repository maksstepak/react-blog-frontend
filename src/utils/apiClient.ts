import axios from 'axios';

import config from '../config';

const apiClient = axios.create({ baseURL: config.apiBaseURL });

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default apiClient;
