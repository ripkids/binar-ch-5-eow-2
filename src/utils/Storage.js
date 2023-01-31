import { KEY_TOKEN } from '../constants/key';

export const saveToken = (token) => {
  localStorage.setItem(KEY_TOKEN, token);
}