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

export async function getMovieVideos(movieId){
    const {
        data: {results}
    } = await api.get(`/movie/${movieId}/videos`)

    return results
}



export async function getMovieCredits(movieId){
    const {data: cast} = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId){
    const {
        data: {results}
    } = await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieByID(movieId){
    const {data} = await api.get(`/movie/${movieId}`)

    return data
}