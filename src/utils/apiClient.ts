import axios from 'axios';

import config from '../config';
import { store } from '../store/store';
import { logoutUser } from '../store/authSlice';

const apiClient = axios.create({ baseURL: config.apiBaseURL });

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(logoutUser());
    }

    return Promise.reject(error);
  }
);

export default apiClient;
