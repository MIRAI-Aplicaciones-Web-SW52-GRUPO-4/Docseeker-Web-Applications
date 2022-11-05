import http from '../../core/services/http-common';

export class MedicalHistoryApiService {
    getAll() {
        return http.get('/medicalHistory');
    }
    getById(id) {
        return http.get(`/medicalHistory/${id}`);
    }
    create(data) {
        return http.post('/medicalHistory', data);
    }
    update(id, data) {
        return http.put(`/medicalHistory/${id}`, data);
    }
    delete(id) {
        return http.delete(`/medicalHistory/${id}`);
    }
}