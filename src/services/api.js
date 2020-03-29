import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-heroes-backend.herokuapp.com',
});

export default api;