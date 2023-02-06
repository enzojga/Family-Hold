import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../generics/Button";
import { ButtonContainer, Container, UnderlineText } from "../generics/generics";
import IconLight from "../generics/IconLight";

export default function WelcomeMenu() {

    const navigate = useNavigate();

    return (
        <Container>
            <IconLight/>
            <BottomContainer>
                <h2>
                    Primeira vez?
                </h2>
                <UnderlineText onClick={() => {navigate("/sign-up")}}>
                    Crie sua conta.
                </UnderlineText>
                <CustomButtom onClick={() => {navigate("/sign-in")}}>
                    <span>
                        Entrar
                    </span>
                </CustomButtom>
            </BottomContainer>
        </Container>
    );
}

const BottomContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    h2 {
        font-size: 2em;
        font-weight: 700;
    }
    h3 {
        font-size: 1.7em;
        font-weight: 400;
        text-decoration: underline white;
        margin: 20px 0 15px 0;
    }
`

const CustomButtom = styled(ButtonContainer)`
    span {
        font-weight: 800;
        svg {
            display: none
        }
    }
`