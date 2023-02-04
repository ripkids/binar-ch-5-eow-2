import base, { BinarBase } from './Base';

const apis = {
  // auth
  login: (body, params) => base.post('/login', body, { params }),
  signUp: (body, params) => base.post('/register', body, { params }),

  // `BinarBase` adalah instance axios yg menggunakan baseURL API binar
  binarLogin: (body, params) => BinarBase.post('/admin/auth/login', body, { params }),

  // BINAR CARS
  // `BinarBase` adalah instance axios yg menggunakan baseURL API binar
  // config = {
  //   headers: {
  //     access_token: ''
  //   },
  //   params: {
  //     name: '',
  //     minPrice
  //   }
  // }
  getCarss: (config) => BinarBase.get('/admin/v2/car', config),
  // const headers = 'tetot'
  // api.getCarss(headers, 'pop');
  // BinarBase.get('/admin/v2/car', { headers: 'tetot', params: 'pop' })
  getCars: (params) => BinarBase.get('/admin/v2/car', { params }),

  // colors
  getColors: (params) => base.get('/colors', { params }),

  // users
  getUsers: (params) => base.get('/users', { params })
}

export default apis;