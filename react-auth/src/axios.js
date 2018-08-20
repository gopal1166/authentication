// Set config defaults when creating the instance
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000'
});

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = 'Token 1f45cf96b952060ac6a7790415aa382fb9d7f67e';
//instance.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');

instance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("token");

  if ( token != null ) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});


export default instance;
