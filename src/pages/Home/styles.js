import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${props => props.img });
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

 
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
`

export const Info = styled.div`
z-index: 2;
padding: 40px;
width: 50%;
    h1{
        font-size: 4rem;
        font-weight: 700;
        color: #ffff;

    }

    p{
        font-size: 20px;
        font-weight: 500;
        color: #ffff;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`

export const Poster = styled.div`
    z-index: 2;
    img{
        width: 400px;
        border-radius: 34px;
    }

`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
`