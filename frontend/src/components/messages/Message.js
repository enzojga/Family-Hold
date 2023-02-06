import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Message({ info }) {

    const userInfo = info.Users.UsersInfo[0];
    const { userData } = useContext(UserContext);
    const self = Boolean(userData.username === info.Users.username);

    const day = dayjs(info.created_at).format('DD/MM HH:mm')

    return (
        <MessageContainer self={self}>
            <div>
                <span>{userInfo?.nickname || info.Users.username}</span>
                <h3>{day}</h3>
            </div>
            <span>{info.message}</span>
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
    margin-bottom: 10px;
    width: 90vw;
    max-width: 90vw;
    min-height: 8vh;
    background-color: ${props => props.self ? '#BE264C' : 'white'};
    border: 1.4px solid black;
    border-radius: 20px;
    text-align: start;
    align-self: ${props => props.self ? 'end' : 'start'};
    & > div {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        span {
            margin-left: 10px;
            color: #BE264C;
            font-size: 1.4em;
            font-weight: 500;
        }
        h3 {
            margin-right: 10px;
            color: ${props => props.self ? 'white' : 'black'};
        }
    }
    & > span {
        width: 100%;
        margin-left: 10px;
        font-size: 1.4em;
        color: ${props => props.self ? 'white' : 'black'};
        margin-bottom: 10px;
    }
`
