import { getImages } from "../../utils/getImages"
import { Container, Title } from "./styles"

function Credits ({credits}) {
    return (
        <>
           <Title>Elenco</Title>
           {credits && ( 
            
            <Container>
                {credits.slice(0, 7).map((artist) => (
                    <div key={artist.id}>
                        <img src={getImages(artist.profile_path)} />
                        <p>{artist.original_name}</p>
                    </div>
                ))}
            </Container>
           )}
        </>
    )
}

export default Credits


