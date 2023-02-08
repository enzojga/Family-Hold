import styled from "styled-components";
import { BsFillTrashFill } from 'react-icons/bs';
import { ImArrowDown } from 'react-icons/im';
import personIcon from "../../assets/images/personIcon.jpg"
import dayjs from "dayjs";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Task({ task, mutation, deleteTask }) {
    const categories = []; 
    const picture = task?.UserTask[0]?.Users?.UsersInfo[0]?.picture;
    const day = dayjs(task.created_at).format('DD/MM HH:mm');
    const { userData } = useContext(UserContext);
    
    return(
        <TaskCotainer>
            {categories.map((p, i) => <CategorieDiv i={i}/>)}
            <div>
                <h1>{task.name}</h1>
                <div>
                    <IconContaier>
                        <BsFillTrashFill onClick={() => {deleteTask.mutate(task.id)}}/>
                    </IconContaier>
                    <IconContaier>
                        <ImArrowDown onClick={() => mutation.mutate(task.id) } />
                    </IconContaier>
                </div>
            </div>
            <div>
                <div>
                    <h2>Participantes:</h2>
                    {task?.UserTask[0]?task?.UserTask.map(u =>  <img src={u.Users?.UsersInfo[0]?.picture || personIcon}/>) : ''}
                </div>
                <span>{day}</span>
            </div>
        </TaskCotainer>       
    );
}

const TaskCotainer = styled.div`
    width: 99vw;
    min-height: 11vh;
    border: 1.4px solid black;
    background-color: white;
    border-radius: 20px;
    position: relative;
    margin-bottom: 10px;
    & > div {
        margin: 10px 0 0 10px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        div {
            display: flex;
            align-items: center;
            h2 {
                font-size: 1.2em;
                font-weight: 600;
            }
            img {
                width: 8vw;
                height: 8vw;
                border-radius: 50%;
                margin-left: 5px;
            }
        }
        h1 {
            font-size: 1.5em;
            font-weight: 800;
        }
        span {
            margin-right: 10px;
        }
    }
`

const IconContaier = styled.div`
    width: 10vw;
    height: 10vw;
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

const CategorieDiv =  styled.div`
    position: absolute;
    top: -10px;
    left: calc(5% + (${props => props. i}% * 4));
    width: 2vw;
    height: 2vh;
    background-color: yellow;
    border: 1px solid black;
    border-radius: 3px;
`