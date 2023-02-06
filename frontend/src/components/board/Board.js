import { useState } from "react";
import Footer from "../generics/Footer";
import { GrayContainer } from "../generics/generics";
import BoardMessages from "../messages/BoardMessages";
import BoardParticipannts from "../participants/Boardparticipants";
import TaskBoard from "../tasks/TasksBoard";
import BoardWarnings from "../warnings/BoardWarnings"

export default function Board({ boardId }) {

    const boardDisplay = {
        1: <BoardWarnings id={boardId}/>,
        2: <BoardMessages id={boardId}/>,
        3: <TaskBoard id={boardId}/>,
        4: <BoardParticipannts id={boardId}/>,
    }

    const [display, setDisplay] = useState(1);

    return(
        <GrayContainer style={{justifyContent: 'start'}}>
            {boardDisplay[display]}
            <Footer setDisplay={setDisplay} display={display}/>
        </GrayContainer>
    );
}