import http from '../../core/services/http-common';

export class HoursApiService {
    getAll() {
        return http.get('/houravailable');
    }
    getById(id) {
        return http.get(`/houravailable/${id}`);
    }
    create(data) {
        return http.post('/houravailable', data);
    }
    update(id, data) {
        return http.put(`/houravailable/${id}`, data);
    }
    delete(id) {
        return http.delete(`/houravailable/${id}`);
    }
}