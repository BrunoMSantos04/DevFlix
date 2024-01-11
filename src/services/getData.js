import api from "./api";

export async function getMovies(){
    const {
        data: {results}
    } = await api.get('/movie/popular')

    return results[0]
}

export async function getTopMovies(){
    const {
        data: {results}
    } = await api.get('/movie/top_rated')

    return results
}

export async function getTopSeries(){
    const {
        data: {results}
    } = await api.get('/tv/top_rated')
    
    return results
}

export async function getOnAirSeries(){
    const {
        data: {results}
    } = await api.get('/tv/on_the_air')

    return results
}

export async function getPeople(){
    const {
        data: {results}
    } = await api.get('person/popular')

    return results
}

export async function getMovie(movieId){
    const {
        data: {results}
    } = await api.get(`/movie/${movieId}/videos`)

    return results[0]
}
