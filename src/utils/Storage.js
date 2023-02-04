import { KEY_ME, KEY_TOKEN, KEY_BINAR_TOKEN } from '../constants/key';

export const saveToken = (token) => {
  localStorage.setItem(KEY_TOKEN, token);
}

export const saveBinarToken = (token) => {
  localStorage.setItem(KEY_BINAR_TOKEN, token);
}

export const saveMe = (me) => {
  localStorage.setItem(KEY_ME, JSON.stringify(me));
}

export const getMe = () => JSON.parse(localStorage.getItem(KEY_ME));