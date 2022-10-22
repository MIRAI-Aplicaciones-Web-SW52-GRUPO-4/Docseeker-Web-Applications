import http from '../../core/services/http-common';

export class MedicalApiService {
    getAll() {
        return http.get('/medicalInformation');
    }
    getById(id) {
        return http.get(`/medicalInformation/${id}`);
    }
    create(data) {
        return http.post('/medicalInformation', data);
    }
    update(id, data) {
        return http.put(`/medicalInformation/${id}`, data);
    }
    delete(id) {
        return http.delete(`/medicalInformation/${id}`);
    }
}