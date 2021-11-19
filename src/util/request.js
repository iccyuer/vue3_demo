import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:9999',
    timeout: 5000,
    // withCredentials: true
});

export default instance;