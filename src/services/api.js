import axios from 'axios';

const api = axios.create({
    baseURL: "https://apimovvi.meridionalcargas.com.br/api"
});

export default api;


