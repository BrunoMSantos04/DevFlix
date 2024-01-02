import api from '../../services/api'
import { useEffect, useState } from 'react'

import { Background, Info, Poster, Container, ContainerButtons } from './styles'

import { getImages } from '../../utils/getImages'
import Button from '../../components/Button'
import Slider from '../../components/Slider'


function Home (){

    const [movie, setMovie ] = useState()
    const [topMovie, setTopMovie ] = useState()

    useEffect( () => {

        async function getMovies () {

            const {
                data: {results}
            } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        async function getTopMovies () {

            const {
                data: {results}
            } = await api.get('/movie/top_rated')

           console.log(results)
            setTopMovie(results)
        }

        getMovies()
        getTopMovies()

    }, [] )

   

    return (
        <>
            {movie && ( 
                <Background img={getImages(movie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} >Assista Agora</Button>
                                <Button red={false} >Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img  alt='capa-filme' src={getImages(movie.poster_path)} /> 
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovie && <Slider  info={topMovie} title={'Top Filmes'} />}
        </>
    )
}

export default Home