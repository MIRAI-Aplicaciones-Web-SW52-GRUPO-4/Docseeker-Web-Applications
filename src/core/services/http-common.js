import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:7263/api/v1', //returns the base url in the port of the backend solution
    headers: { 'Content-type': 'application/json' }
});