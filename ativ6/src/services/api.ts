import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://theaudiodb.com/api/v1/json/2/'
});