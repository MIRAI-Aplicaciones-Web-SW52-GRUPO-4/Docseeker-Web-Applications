import http from '../../core/services/http-common';

export class DoctorsApiService {
    getAll() {
        return http.get('/doctor');
    }
    getById(id) {
        return http.get(`/doctor/${id}`);
    }
    create(data) {
        return http.post('/doctor', data);
    }
    update(id, data) {
        return http.put(`/doctor/${id}`, data);
    }
    delete(id) {
        return http.delete(`/doctor/${id}`);
    }
}