import styled from "styled-components";

export const Container = styled.div`
    background-color: #BE264C;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const ButtonContainer = styled.div`
    width: 90%;
    height: 60px;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    display: grid;
    justify-content: center;
    align-items: center;
    justify-self: end;
    position: relative;
    span {
        color: ${props => props.darkMode ? '#9B1839' : '#BE264C'};
        font-size: 1.7em;
        font-weight: ${props => props.darkMode ? '800' : '400'};
        svg {
            position absolute;
            top: 19px;
            right: 30px;
            display: ${props => props.darkMode ? 'none' : 'initial'}
        }
    }
`;

export const UnderlineText = styled.h3`
    color: white;
    font-size: 1.7em;
    font-weight: 400;
    text-decoration: underline white;
    margin: 20px 0 15px 0;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100vw;

    label {
        font-size: 1.7em;
        color: white;
        font-weight: 800;
        padding: 0 0 10px 20px;
    }

    input {
        width: 90vw;
        height: 60px;
        background-color: white;
        border: 1px solid black;
        align-self: center;
        border-radius: 20px;
        margin-bottom: 15px;
        box-sizing: border-box;
    }

    button {
        width: 90%;
        height: 60px;
        background-color: white;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
        display: grid;
        justify-content: center;
        align-items: center;
        justify-self: end;
        position: relative;
        border: none;
        align-self: center;
        margin-top: 25px;
        span {
            color: #BE264C;
            font-size: 1.7em;
            font-weight: 800;
        }
    }
    
    h3 {
        align-self: center;
    }
`

export const OpacityContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 50%;
    z-index: 2;
    display: ${props => props.show ? 'initial' : 'none'}
`

export const GrayContainer = styled(Container)`
    background-color: #DFDFDF;
    text-align: center;
    position:relative;
    height: calc(100% - 10vw);
    margin-top: 10vh;
    justify-content: 'start';
    text-align:'initial'
`
export const AlternativeButton = styled(ButtonContainer)`
    box-shadow: none;
    margin-bottom: 15px;
    background-color: #BE264C;
    span {
        color: white;
    }
`
export const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #BE264C;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    top: 0;
    left: 0;
    z-index: 1;
    h2 {
        font-size: 1.3em;
        color: white;
    }
    img {
        width: 8vh;
        height: 8vh;
    }
`

export const IconContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`

export const VerticalLine = styled.div`
    width: 100vw;
    height: 5px;
    background-color: #961D3A;
`

export const CustomForm = styled(FormContainer)`
    margin-top: 30px;
    label {
        color: black;
        font-weight: 400;
    }
    & > button {
        margin-bottom: 15px;
        background-color: #BE264C;
        span {
            color: white;
        }    
    }
`
