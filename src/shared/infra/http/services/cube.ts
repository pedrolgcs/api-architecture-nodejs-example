import axios from 'axios';

const { CUBE_URL = 'http://localhost:3333' } = process.env;

const cube = axios.create({
  baseURL: CUBE_URL,
});

export { cube };
