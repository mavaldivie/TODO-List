const axios = require('axios');

const BASE_URL = 'http://localhost:3001/';

module.exports.getAll = () => axios.get(BASE_URL);

module.exports.getById = (id) => axios.get(BASE_URL + id);

module.exports.post = (todo) => axios.post(BASE_URL, todo);

module.exports.put = (todo) => axios.put(BASE_URL, todo);

module.exports.del = (id) => axios.delete(BASE_URL + id);