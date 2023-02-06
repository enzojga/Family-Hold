import styled from "styled-components";
import { ImExit } from 'react-icons/im';
import { BsFillPencilFill } from 'react-icons/bs';
import personIcon from "../../assets/images/personIcon.jpg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Parsticipant({ info, id }) {
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const navigateState = {id, nickname: info?.Users?.UsersInfo[0]?.nickname,
                                status: info?.Users?.UsersInfo[0]?.status,
                                picture: info?.Users?.UsersInfo[0]?.picture
                            }
    function showLogic() {
        if(info.Users.username === userData.username){
            return 'flex';
        }
        return 'none';
    }
    return(
        <ParticipantContainer>
            <div>
                <div>
                    <img src={info?.Users?.UsersInfo[0]?.picture || personIcon}/>
                    <h1>{info?.Users?.UsersInfo[0]?.nickname || info.Users.username}</h1>
                </div>
                <div>
                    <IconContaier style={{display: showLogic()}}>
                        <BsFillPencilFill onClick={() => navigate("/board/create/user-info",
                         {state: navigateState})}/>
                    </IconContaier>
                </div>
            </div>
            <span>
                {info?.Users?.UsersInfo[0]?.status || 'Estou disponivel!'}
            </span>
        </ParticipantContainer>
    )   
}

const ParticipantContainer = styled.div`
    width: 99vw;
    min-height: 11vh;
    border: 1.4px solid #BE264C;
    background-color: white;
    border-radius: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-bottom: 10px;
    span {
        font-size: 1.5em;
        align-self: start;
        margin: 0 0 5px 69px;
    }
    & > div {
        margin: 10px 0 0 10px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        img {
            width: 13vw;
            height: 13vw;
            border-radius: 50%;
        }
        div {
            display: flex;
            align-items: center;
            h2 {
                font-size: 1.2em;
                font-weight: 600;
            }
        }
        h1 {
            font-size: 1.5em;
            margin-left: 10px;
        }
    }
`

const IconContaier = styled.div`
    width: 8vw;
    height: 8vw;
    background-color: #BE264C;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    svg {
        color: white;
    }
`
