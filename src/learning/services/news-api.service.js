import http from '../../core/services/http-common';

export class NewsApiService {
    getAll() {
        return http.get('/new');
    }
    getById(id) {
        return http.get(`/new/${id}`);
    }
    create(data) {
        return http.post('/new', data);
    }
    update(id, data) {
        return http.put(`/new/${id}`, data);
    }
    delete(id) {
        return http.delete(`/new/${id}`);
    }
}