/* eslint-disable */
import axios from 'axios';

axios.setXApiKey = (token) => {
  axios.defaults.headers.common['x-api-key'] = token;
};

axios.defaults.baseURL = 'http://127.0.0.1/api';
axios.defaults.validateStatus = (status) => {
  if (status === 401) {
    localStorage.removeItem('token');
    window.location.assign('/');
  }
  return status >= 200 && status < 300; // default
};
axios.defaults.headers.common['Content-Type'] = 'application/json';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['x-api-key'] = token;
}

export default axios;
