import axios from 'axios';

export const axiosCatsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_CATS_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_AUTH_KEY_CATS_KEY,
  },
});
