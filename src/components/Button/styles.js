import styled, {css} from "styled-components";

const buttonStyle = css`
    border: 3px solid #ffff;
    background: transparent;
    color: #ffff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        color: #ff0000;
        background: white;
    }
`

export const MainButton = styled.button``

export const ButtonWhite = styled.button`
    ${buttonStyle}
`

export const ButtonRed = styled.button`
    ${buttonStyle}

    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background: #ff0000;
        color: white;
    }
`