import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-clone-uxu1.onrender.com/api/twitter',
  withCredentials: true,
});

export default instance;
