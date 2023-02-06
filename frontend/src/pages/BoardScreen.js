import { useParams } from "react-router-dom";
import Board from "../components/board/Board";

export default function BoardScreen() {
    const { boardId } = useParams();
    return(
        <Board boardId={boardId}/>
    );
}