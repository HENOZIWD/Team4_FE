import axios from 'axios';
import { createFetchInstance } from '../utils/fetch';

export const fetchInstance = createFetchInstance('/api', 1000);
export const papagoInstance = axios.create({
  baseURL: '/v1/papago',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Naver-Client-Id': process.env.REACT_APP_LANGUAGE_DETECT_API_ID,
    'X-Naver-Client-Secret': process.env.REACT_APP_LANGUAGE_DETECT_API_SECRET,
  },
  withCredentials: true,
});
