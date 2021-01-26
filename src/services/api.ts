import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodedeploy.tudoconectado.org',
});

export default api;
