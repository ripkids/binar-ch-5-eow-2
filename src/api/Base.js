import axios from 'axios';

import { KEY_TOKEN } from '../constants/key';

const Base = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 15000
})

Base.interceptors.request.use((req) => {
  const token = localStorage.getItem(KEY_TOKEN);

  if (req.url !== '/login') {
    req.headers['Authorization'] = `Bearer ${token}`;
  }

  return req;
});

export default Base;
