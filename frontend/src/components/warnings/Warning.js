import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
import personIcon from "../../assets/images/personIcon.jpg"
import { OpacityContainer } from "../generics/generics";
import { GrClose } from 'react-icons/gr';
import { VerticalLine } from "../generics/generics"

export default function Warning({ info, teste }) {
    const { UsersInfo } = info?.Boards;
    const day = dayjs(info?.created_at).format('DD/MM');
    const hour = dayjs(info?.created_at).format('HH:mm');
    const firstWord = info?.text.split(' ');
    const [show, setShow] = useState(false);
    return(
        <>
            <WarningContainer onClick={() => setShow(true)}>
                <div>
                    <img src={UsersInfo[0]?.picture || personIcon} alt='user picture' />
                    <div>
                        <h3>{UsersInfo[0]?.nickname || info?.Users?.username}</h3>
                        <h4>{day + ' / ' + hour}</h4>
                    </div>
                </div>
                <h2>
                    {firstWord[0]}...
                </h2>
            </WarningContainer>
            <OpacityContainer show={show}/>
            <WarnningFocus show={show}>
                <CustomWarningContainer>
                    <div>
                        <img src={UsersInfo[0]?.picture || personIcon} alt='user picture' />
                        <div>
                            <h3>{UsersInfo[0]?.nickname || info?.Users?.username}</h3>
                            <h4>{day + ' / ' + hour}</h4>
                        </div>
                    </div>
                    <GrClose onClick={() => setShow(false)}/>
                </CustomWarningContainer>
                <VerticalLine/>
                <span>{info?.text}</span>
            </WarnningFocus>
        </>

    );
}

const WarningContainer = styled.div`
    margin-top: 20px;
    width: 99vw;
    height: 8vh;
    background-color: white;
    border: 1px solid #961D3A;
    border-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    h2 {
        font-size: 1.2em;
        max-width: 50%;
        overflow: hidden;
        margin-right: 10px;
    }
    & > div {
        display: flex;
        justify-content: center;
        max-width: 50%;
        margin-left: 10px;
        img {
            border-radius: 50%;
            width: 6.5vh;
            height: 6.5vh;        
        }
        h3 {
            font-size: 1.2em;
            font-weight: 600;
            margin-bottom: 7px;
            max-width: 50%
        }
        h4 {
            font-size: 1em;
            font-weight: 400;
        }    
        & > div {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            margin-left: 10px; 
        }
    }
`

const WarnningFocus = styled.div`
    width: ${props => props.show ? '100vw' : '0px'};
    display: ${props => props.show ? 'flex' : 'none'};
    min-height: 10vh;
    background-color: white;
    z-index: 10;
    position: fixed;
    top: 10vh;
    left: 0;
    border: 1px solid #961D3A;
    border-radius: 20px;
    flex-direction: column;
    text-align: initial;
    span {
        margin: 10px 0 10px 10px;
        font-size: 1.5em;
    }
`

const CustomWarningContainer = styled(WarningContainer)`
    background-color: initial;
    border: none;
    border-radius: none;
    margin-top: 10px;
    svg {
        color: #961D3A;
        width: 7vw;
        height: 7vw;
        margin-right: 10px; 
    }
`