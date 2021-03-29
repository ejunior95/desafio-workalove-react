import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60613f30ac47190017a708c8.mockapi.io',
  headers: {
    'Access-Control-Allow-Origin': '',
    'Access-Control-Allow-Methods': '',
  },
});

export default api;