import api from '../../services/api'
import { useEffect, useState } from 'react'

import { Background, Info, Poster, Container, ContainerButtons } from './styles'

import { getImages } from '../../utils/getImages'
import Button from '../../components/Button'
import Slider from '../../components/Slider'


function Home (){

    const [movie, setMovie ] = useState()
    const [topMovie, setTopMovie ] = useState()
    const [topSerie, setTopSerie ] = useState()
    const [OnAair, setOnAair ] = useState()
    const [people, setPeople ] = useState()

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

        async function getTopSeries () {

            const {
                data: {results}
            } = await api.get('/tv/top_rated')

           console.log(results)
            setTopSerie(results)
        }

        async function getOnAirSeries () {

            const {
                data: {results}
            } = await api.get('/tv/on_the_air')

           console.log(results)
           setOnAair(results)
        }

        async function getPeople () {

            const {
                data: {results}
            } = await api.get('person/popular')

           console.log(results)
           setPeople(results)
        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getOnAirSeries()
        getPeople()

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
            {topSerie && <Slider  info={topSerie} title={'Top Series'} />}
            {OnAair && <Slider  info={OnAair} title={'No Ar'} />}
            {people && <Slider  info={people} title={'Artistas Mais Populares'} />}
            
        </>
    )
}

export default Home