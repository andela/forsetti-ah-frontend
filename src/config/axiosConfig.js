import axios from 'axios';

const token = window.localStorage.getItem('token');

const instance = axios.create({
  baseURL: 'https://forsetti-ah-backend-staging.herokuapp.com/api/v1'
});

if (token !== null || undefined) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default instance;
