import http from '../../core/services/http-common';

export class MedicalApiService {
    getAll() {
        return http.get('/medicalinformation');
    }
    getById(id) {
        return http.get(`/medicalinformation/${id}`);
    }
    create(data) {
        return http.post('/medicalinformation', data);
    }
    update(id, data) {
        return http.put(`/medicalinformation/${id}`, data);
    }
    delete(id) {
        return http.delete(`/medicalinformation/${id}`);
    }
}