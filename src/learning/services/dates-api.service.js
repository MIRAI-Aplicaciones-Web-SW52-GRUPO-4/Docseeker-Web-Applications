import http from '../../core/services/http-common';

export class DatesApiService {
    getAll() {
        return http.get('/date');
    }
    getById(id) {
        return http.get(`/date/${id}`);
    }
    create(data) {
        return http.post('/date', data);
    }
    update(id, data) {
        return http.put(`/date/${id}`, data);
    }
    delete(id) {
        return http.delete(`/date/${id}`);
    }
}