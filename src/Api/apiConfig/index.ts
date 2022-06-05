import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY as string,
  },
});
