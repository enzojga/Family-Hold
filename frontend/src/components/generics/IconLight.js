import styled from "styled-components";
import logoLight from "../../assets/images/family-hold-light.png";
import logoDark from "../../assets/images/family-hold-dark.png";
import { useNavigate } from "react-router-dom";

export default function IconLight({ darkMode, noText }) {
    const navigate = useNavigate()
    return(
        <Container noText={noText} darkMode={darkMode}>
            <img src={darkMode ? logoDark : logoLight} alt="logo" onClick={() => {navigate('/')}}/>
            <span>FamilyHold</span>
        </Container>
    );
}

const Container = styled.div`
    background-color: ${props => props.darkMode ? '#9B1839' : '#BE264C'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 40px;
    justify-self: start;
    span {
        display: ${props => props.noText ? 'none' : 'initial'};
        font-size: 2em;
        color: white;
        position: absolute;
        bottom: 10px;
    }
`