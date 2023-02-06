import styled from "styled-components"
import { TfiFaceSad } from 'react-icons/tfi';

export default function NoBoard() {
    return(
        <NoBoardsContainer>
            <h1>
                Parece que você ainda não esta participando de nenhum quadro.
            </h1>
            <TfiFaceSad/>
        </NoBoardsContainer>
    )
}

const NoBoardsContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 15em;
    h1 {
        font-size: 2em;
        font-weight: 600;
    }
    svg {
        margin-top: 2em;
        width: 33vw;
        height: 33vw;
    }   
`