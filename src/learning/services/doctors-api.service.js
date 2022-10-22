import http from '../../core/services/http-common';

export class DoctorsApiService {
    getAll() {
        return http.get('/doctors');
    }
    getById(id) {
        return http.get(`/doctors/${id}`);
    }
    create(data) {
        return http.post('/doctors', data);
    }
    update(id, data) {
        return http.put(`/doctors/${id}`, data);
    }
    delete(id) {
        return http.delete(`/doctors/${id}`);
    }
}