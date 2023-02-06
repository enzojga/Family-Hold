import styled from "styled-components";
import { AlternativeButton, GrayContainer, OpacityContainer } from "../generics/generics";
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getBoardsApi } from "../../services/boardApi";
import BoardList from "./BoardList";
import NoBoard from "./NoBoard";

export default function Home() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery("boards", getBoardsApi);
    return(
        <GrayContainer style={{textAlign:'initial', justifyContent: 'start'}} >
            {data?.data[0] ? <BoardList data={data.data}/> : <NoBoard/>}
            <ButtonsContainer show={show}>
                <AlternativeButton onClick={() => {navigate("/board/join")}}>
                    <span>Entrar com convite</span>
                </AlternativeButton>
                <AlternativeButton onClick={() => {navigate("/board/create")}}>
                    <span>Criar Quadro</span>
                </AlternativeButton>
                <AiFillPlusCircle onClick={ () => { setShow(!show) } }/>
            </ButtonsContainer>
            {show ? <OpacityContainer show={show}/> : <></>}
        </GrayContainer>
    );
}

const ButtonsContainer = styled.div`
    width: ${props => props.show ? '100%' : '0'};;
    height: 100vh;
    position: fixed;
    bottom: 10vh;
    right: 0;
    z-index: 3;
    align-items: center;
    display: flex;
    justify-content: end;
    flex-direction: column;
    & > div {
        display: ${props => props.show ? 'flex' : 'none'};
    }
    & > svg {
        color: #BE264C;
        width: 20vw;
        height: 20vw;
        position: fixed;
        bottom: 0;
        right: 0;
        transform: ${props => props.show ? 'rotateZ(45deg)' : 'rotateZ(0)' };
    }    
`
