import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-clone-uxu1.onrender.com',
  withCredentials: true,
});

export default instance;
