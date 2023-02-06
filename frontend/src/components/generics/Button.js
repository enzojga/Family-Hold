import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import { ButtonContainer } from "./generics";

export function Button({ text, darkMode, swiper}) {
    return(
        <ButtonContainer darkMode={darkMode} onClick={() => console.log(swiper)}>
            <span>
                {text}
                <AiOutlineRight/>
            </span>
        </ButtonContainer>
    );
}
