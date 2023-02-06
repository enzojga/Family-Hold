import styled from 'styled-components'
import TitleLine from '../generics/TitleLine'
import { MdSavings } from 'react-icons/md';
import { FaCoins } from 'react-icons/fa';
import Participant from './Participant';
import { useQuery } from "react-query";
import { getUserInfoApi } from "../../services/userInfoApi";

export default function BoardParticipannts( { id } ) {
    const { data, isLoading, error } = useQuery(["info", id], () => getUserInfoApi(id));

    return(
        <>
            <TitleLine text={'Participantes'}/>
            {/*<SavingsContainer>
                <MdSavings/>
                <span><strong>Cofrinho:</strong> <h2> R$: 1000,00</h2></span>
                <div>
                    <FaCoins/>
                </div>
            </SavingsContainer>*/}
            <ParticipatsContainer>
                {data?.data ? data.data.map(p => <Participant info={p} id={id}/>) : ''}
            </ParticipatsContainer>
        </>
    )
}

const SavingsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    & > svg {
        width: 20vw;
        height: 20vw;
        color: #BE264C;
        margin-left: 5px;
    }
    span {
        display: flex;
        strong {
            font-weight: 800;
            font-size: 1.5em;
            margin: 0 5px 0 5px;    
        }
        h2 {
            font-weight: 400;
            font-size: 1.3em;
            align-self: end;
        }
    }
    div {
        width: 12vw;
        height: 12vw;
        background-color: #BE264C;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 5px;
        svg {
            width: 7vw;
            height: 7vw;    
            color: white;
        }
    }
`

const ParticipatsContainer = styled.div`

`