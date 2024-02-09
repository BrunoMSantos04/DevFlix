import { useEffect } from "react"
import { Backgound, Container, ContainerMovies, Cover, Info } from "./styles"
import { useParams } from "react-router-dom"
import { getImages } from "./../../utils/getImages"
import { getMovieByID, getMovieVideos, getMovieCredits, getMovieSimilar } from "./../../services/getData"
import { useState } from "react"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"

function Detalhe() {

    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setCredits] = useState()
    const [movieSimilar, setSimilar] = useState()


    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovieByID(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([movie, videos, credits, similar]) => {
                   
                    setMovie(movie)
                    setMovieVideos(videos)
                    setCredits(credits)
                    setSimilar(similar)
                })
                .catch((error) => console.error(error))


        }

        getAllData()

    }, [])

    return (
        <>
            {movie && (
                <>
                    <Backgound image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres}/>
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerMovies>
                        {movieVideos && movieVideos.map( video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                <iframe src={`https://www.youtube.com/embed/${video.key}`} 
                                title='YouTube Video Player'
                                height="500px"
                                width="100%"
                                ></iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {movieSimilar && (<Slider  info={movieSimilar} title={'Filmes Relacionados'} />)}
                </>
            )}
        </>
    )
}

export default Detalhe