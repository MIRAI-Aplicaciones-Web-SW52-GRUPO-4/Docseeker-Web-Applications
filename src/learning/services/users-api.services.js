import http from '../../core/services/http-common';

import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1', //returns the base url
    headers: { 'Content-type': 'application/json' }
});

export class UsersApiService {
    getAll() {
        return http.get('/users');
    }
    getById(id) {
        return http.get(`/users/${id}`);
    }
    create(data) {
        return http.post('/users', data);
    }
    update(id, data) {
        return http.put(`/users/${id}`, data);
    }
    delete(id) {
        return http.delete(`/users/${id}`);
    }
}