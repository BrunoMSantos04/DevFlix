import { useEffect, useState } from 'react'
import {Container, Background, Button} from './styles'
import { getMovie } from '../../services/getData'

function Modal ({movieId, setShowModal}) {

    const [movie, setMovieId] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovieId(await getMovie(movieId))
        }

        getMovies()
    }, [])

    return (
        <Background  onClick={ () => setShowModal(false)} >
            {movie && (
                <Container> 
                    <Button  onClick={ () => setShowModal(false)} >Fechar Player</Button>
                    <iframe src={`https://www.youtube.com/embed/${movie.key}`} 
                    title='YouTube Video Player'
                    height="500px"
                    width="100%"
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal