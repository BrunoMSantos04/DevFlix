//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '8bfb9583eb68c3139a0d425b43244fa9',
        language: 'pt-BR',
        page: 1
    }
})

export default api