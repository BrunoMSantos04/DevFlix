import { Container } from "./styles"
import {Swiper, SwiperSlide} from "swiper/react"
import { getImages } from '../../utils/getImages'
import Card from "../Card"

function Slider ({info, title}) {
    return (
        <Container> 
            <h2>{title}</h2>
            <Swiper grabCursor
                    spaceBetween={15}
                    slidesPerView={"auto"}
                    className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </Container>
    )
}

export default Slider