import { IoIosWarning } from "react-icons/io"
import { BsFillChatFill, BsFillPeopleFill } from "react-icons/bs"
import { FaTasks } from "react-icons/fa"

import styled from "styled-components"
import { HeaderContainer } from "./generics"

export default function Footer({ display, setDisplay}) {

    function colorLogic(n) {
        if(display === n) {
            return 'black';
        }
        return 'white';
    };
    
    return (
        <FooterContainer>
            <IoIosWarning style={{color: colorLogic(1)}} onClick={() => {setDisplay(1)}}/>
            <BsFillChatFill style={{color: colorLogic(2)}} onClick={() => {setDisplay(2)}}/>
            <FaTasks style={{color: colorLogic(3)}} onClick={() => {setDisplay(3)}}/>
            <BsFillPeopleFill style={{color: colorLogic(4)}} onClick={() => {setDisplay(4)}}/>
        </FooterContainer>
    )
}

const FooterContainer = styled(HeaderContainer)`
    bottom: 0;
    top: auto;
    justify-content: space-evenly;
    svg {
        width: 16vw;
        height: 16vw;
    }
`