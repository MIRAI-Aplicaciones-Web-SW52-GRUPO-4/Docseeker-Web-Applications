import http from '../../core/services/http-common';

export class ReviewsApiService {
    getAll() {
        return http.get('/review');
    }
    getById(id) {
        return http.get(`/review/${id}`);
    }
    create(data) {
        return http.post('/review', data);
    }
    update(id, data) {
        return http.put(`/review/${id}`, data);
    }
    delete(id) {
        return http.delete(`/review/${id}`);
    }
}