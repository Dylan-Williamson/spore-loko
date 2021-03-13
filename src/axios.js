import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5001/spore-loko/us-central1/api'
    baseURL: 'https://us-central1-spore-loko.cloudfunctions.net/api'
});

export default instance;