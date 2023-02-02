import base from './Base';

const apis = {
  // auth
  login: (body, params) => base.post('/login', body, { params }),
  signUp: (body, params) => base.post('/register', body, { params }),

  // colors
  getColors: (params) => base.get('/colors', { params }),

  // users
  getUsers: (params) => base.get('/users', { params })
}

export default apis;