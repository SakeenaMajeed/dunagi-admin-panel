import axios from 'axios';

const BASE_URL = 'https://your-backend-url.com/api';  

export const getToken = () => sessionStorage.getItem('token');


export const apiClient = axios.create({
  baseURL: BASE_URL,  
  headers: {
    'Content-Type': 'application/json',
  },
});


apiClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
