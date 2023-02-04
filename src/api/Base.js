import axios from 'axios';

import { KEY_TOKEN, KEY_BINAR_TOKEN } from '../constants/key';

const Base = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 15000
})

const BinarBase = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_BINAR_URL}`,
  timeout: 10000
})

Base.interceptors.request.use((req) => {
  const token = localStorage.getItem(KEY_TOKEN);

  if (req.url !== '/login') {
    req.headers['Authorization'] = `Bearer ${token}`;
  }

  return req;
});

BinarBase.interceptors.request.use((req) => {
  const token = localStorage.getItem(KEY_BINAR_TOKEN);

  if (req.url !== '/admin/auth/login') {
    req.headers['access_token'] = token;
  }

  return req;
})

export default Base;
export { BinarBase };
