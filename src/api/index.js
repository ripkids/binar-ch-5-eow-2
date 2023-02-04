import base, { BinarBase } from './Base';

const apis = {
  // auth
  login: (body, params) => base.post('/login', body, { params }),
  signUp: (body, params) => base.post('/register', body, { params }),
  binarLogin: (body, params) => BinarBase.post('/admin/auth/login', body, { params }),

  // BINAR CARS
  getCars: (params) => BinarBase.get('/admin/v2/car', { params }),

  // colors
  getColors: (params) => base.get('/colors', { params }),

  // users
  getUsers: (params) => base.get('/users', { params })
}

export default apis;