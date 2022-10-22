import http from '../../core/services/http-common';

export class PrescriptionsApiService {
    getAll() {
        return http.get('/prescriptions');
    }
    getById(id) {
        return http.get(`/prescriptions/${id}`);
    }
    create(data) {
        return http.post('/prescriptions', data);
    }
    update(id, data) {
        return http.put(`/prescriptions/${id}`, data);
    }
    delete(id) {
        return http.delete(`/prescriptions/${id}`);
    }
}