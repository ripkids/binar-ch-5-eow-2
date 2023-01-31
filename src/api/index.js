import base from './Base';

const apis = {
  login: (body, params) => base.post('/login', body, { params }),
  signUp: (body, params) => base.post('/register', body, { params }),
  getColors: (params) => base.get('/colors', { params })
}

export default apis;