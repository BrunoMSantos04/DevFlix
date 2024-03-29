import { useEffect, useState } from 'react'
import {Container, Background, Button} from './styles'
import { getMovieVideos } from '../../services/getData'

function Modal ({movieId, setShowModal}) {

    const [movie, setMovieId] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovieId(await getMovieVideos(movieId))
        }

        getMovies()
    }, [])


    

    return (
        <Background  onClick={ () => setShowModal(false)} >
            {movie && (
                <Container> 
                    <Button  onClick={ () => setShowModal(false)} >Fechar Player</Button>
                    <iframe src={`https://www.youtube.com/embed/${movie[0].key}`} 
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