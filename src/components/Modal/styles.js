import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    padding: 50px;
    max-width: 1200px;

    iframe{
        border: none;
    }

    Button{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column: 3 / 3;
    }
   
`

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    
`

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 8px 6px;
    cursor: pointer;
    color: black;
`