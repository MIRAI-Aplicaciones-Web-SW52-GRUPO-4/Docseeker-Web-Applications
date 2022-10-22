import http from '../../core/services/http-common';

export class NewsApiService {
    getAll() {
        return http.get('/news');
    }
    getById(id) {
        return http.get(`/news/${id}`);
    }
    create(data) {
        return http.post('/news', data);
    }
    update(id, data) {
        return http.put(`/news/${id}`, data);
    }
    delete(id) {
        return http.delete(`/news/${id}`);
    }
}