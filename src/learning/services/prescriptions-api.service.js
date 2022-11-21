import http from '../../core/services/http-common';

export class PrescriptionsApiService {
    getAll() {
        return http.get('/prescription');
    }
    getById(id) {
        return http.get(`/prescription/${id}`);
    }
    create(data) {
        return http.post('/prescription', data);
    }
    update(id, data) {
        return http.put(`/prescription/${id}`, data);
    }
    delete(id) {
        return http.delete(`/prescription/${id}`);
    }
}