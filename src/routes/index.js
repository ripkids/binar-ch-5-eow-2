import React from 'react';
import { Navigate } from 'react-router';

import { KEY_TOKEN } from '../constants/key';

import Base from '../pages/Base';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import User from '../pages/User';

const routes = () => {
  const token = localStorage.getItem(KEY_TOKEN);

  return [
    {
      path: '',
      element: <Navigate to={token
        ? '/home'
        : '/login'}
      />
    },
    {
      path: 'login',
      element: <Base />,
      children: [
        {
          path: '',
          element: <Login />
        }
      ]
    },
    {
      path: 'sign-up',
      element: <Base />,
      children: [
        {
          path: '',
          element: <SignUp />
        }
      ]
    },
    {
      path: 'home',
      element: <Base />,
      children: [
        {
          path: '',
          element: <Home />
        }
      ]
    },
    {
      path: 'user',
      element: <Base />,
      children: [
        {
          path: '',
          element: <User />
        }
      ]
    }
  ]
}

export default routes;