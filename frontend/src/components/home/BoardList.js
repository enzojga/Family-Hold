import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoardIcons from "../generics/BoardIcons";
import { IconContainer, VerticalLine } from "../generics/generics";
import TitleLine from "../generics/TitleLine";

export default function BoardList( data ) {
    const navigate = useNavigate();
    return(
        <>
            <TitleLine text={'Seus quadros'}/>
            <IconContainer style={{ justifyContent: 'space-between'}}>
                { data.data.map((p, i) => 
                <IconTextContainer onClick={ () => { navigate(`/board/${p.Boards.id}`) } }>
                    <BoardIcons id={p.Boards.icon} icon={p.Boards.icon} key={i}/>
                    <span>{p.Boards.name}</span>
                </IconTextContainer>) }
            </IconContainer>
        </>
    )
}

const IconTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    span {
        font-weight: 800;
        font-size: 1.5em;
        margin-bottom: 20px;
    }
`