import styled from "styled-components"
import { VerticalLine } from "./generics"

export default function TitleLine({ text }) {
    return (
        <TitleContainer>
            <h1>{ text }</h1>
            <VerticalLine/>
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
    text-align: center;
    margin: 20px 0 20px 0;
    h1 {
        font-weight: 800;
        font-size: 2em;
        margin-bottom: 20px;
    }
`