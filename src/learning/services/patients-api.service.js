import http from '../../core/services/http-common';

export class PatientsApiService {
    getAll() {
        return http.get('/patient');
    }
    getById(id) {
        return http.get(`/patient/${id}`);
    }
    create(data) {
        return http.post('/patient', data);
    }
    update(id, data) {
        return http.put(`/patient/${id}`, data);
    }
    delete(id) {
        return http.delete(`/patient/${id}`);
    }
}