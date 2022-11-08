import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:7263/api/v1', //returns the base url
    headers: { 'Content-type': 'application/json' }
});