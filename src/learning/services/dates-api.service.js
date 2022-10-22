import http from '../../core/services/http-common';

export class DatesApiService {
    getAll() {
        return http.get('/dates');
    }
    getById(id) {
        return http.get(`/dates/${id}`);
    }
    create(data) {
        return http.post('/dates', data);
    }
    update(id, data) {
        return http.put(`/dates/${id}`, data);
    }
    delete(id) {
        return http.delete(`/dates/${id}`);
    }
}