import api from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Background, Info, Poster, Container, ContainerButtons } from './styles'

import { getImages } from '../../utils/getImages'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import { getMovies, getOnAirSeries, getPeople, getTopMovies, getTopSeries } from '../../services/getData'


function Home (){

    const [movie, setMovie ] = useState()
    const [topMovie, setTopMovie ] = useState()
    const [topSerie, setTopSerie ] = useState()
    const [OnAair, setOnAair ] = useState()
    const [people, setPeople ] = useState()
    const [showModal, setShowModal ] = useState(false)
    const navigate = useNavigate()

    useEffect( () => {

        async function getAllData () {
            
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getOnAirSeries(),
                getPeople()
            ])
                .then(([movie, topMovie, topSerie, onAir, topPeople]) => {
                    setMovie(movie)
                    setTopMovie(topMovie)
                    setTopSerie(topSerie)
                    setOnAair( onAir)
                    setPeople(topPeople)
                })
                .catch((error) => console.error(error))

            
        }

        getAllData()

    }, [] )

   

    return (
        <>
            {movie && ( 
                <Background img={getImages(movie.backdrop_path)}>
                    { showModal && <Modal movieId={movie.id}  setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)} >Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false} >Assista o Trailer</Button>
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