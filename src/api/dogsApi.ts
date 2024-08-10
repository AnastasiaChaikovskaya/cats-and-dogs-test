import axios from 'axios';

export const axiosDogsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_DOGS_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_AUTH_KEY_DOGS_KEY,
  },
});
