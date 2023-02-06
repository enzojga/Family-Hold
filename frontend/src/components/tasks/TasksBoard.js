import { useMutation, useQuery } from 'react-query';
import { deleteTasksApi, getTasksApi, joinTasksApi } from '../../services/taskApi';
import TitleLine from '../generics/TitleLine';
import Task from './Task';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { AlternativeButton, OpacityContainer } from "../generics/generics";
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskBoard({ id }) {
    const { data, isLoading, error, refetch } = useQuery(["tasks", id], () => getTasksApi(id));
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: (id) => joinTasksApi(id),
        onSuccess: (data) => {
            refetch();
            toast.success("Se inscreveu!");
        },
        onError: (data) => {
            if(data.response.status === 409) {
                toast.error("Você já está cadastrado nesta atividade!");
                return;
            } else {
                toast.error("Algo de errado aconteceu.");
                return;
            }
        },
    });

    const deleteTask = useMutation({
        mutationFn: (id) => deleteTasksApi(id),
        onSuccess: (data) => {
            refetch();
            toast.success("Atividade deletada!");
        },
        onError: (data) => {
            if(data.response.status === 401) {
                toast.error("Você não pode excluir uma atividade que não é sua!");
                return;
            } else {
                toast.error("Algo de errado aconteceu.");
                return;
            }
        },
    });

    return(
        <>
            <ToastContainer/>
            <TitleLine text={'Tarefas'}/>
            {data?.data ? data.data.map(t => <Task task={t} mutation={mutation} deleteTask={deleteTask} />) : ''}
            <ButtonsContainer show={show}>
                <AlternativeButton>
                    <span onClick={() => navigate("/board/create/categorie", {state: id})}>Criar categoria</span>
                </AlternativeButton>
                <AlternativeButton>
                    <span onClick={() => navigate("/board/create/task", {state: id})}>Criar tarefa</span>
                </AlternativeButton>
                <AiFillPlusCircle onClick={ () => { setShow(!show) } }/>
            </ButtonsContainer>
            {show ? <OpacityContainer show={show}/> : <></>}
    
        </>
    );
}

const ButtonsContainer = styled.div`
    width: ${props => props.show ? '100%' : '0'};;
    height: 110vh;
    position: fixed;
    bottom: 20vh;
    right: 0;
    z-index: 3;
    align-items: center;
    display: flex;
    justify-content: end;
    flex-direction: column;
    & > div {
        display: ${props => props.show ? 'flex' : 'none'};
    }
    & > svg {
        color: #BE264C;
        width: 20vw;
        height: 20vw;
        position: fixed;
        bottom: 10vh;
        right: 0;
        transform: ${props => props.show ? 'rotateZ(45deg)' : 'rotateZ(0)' };
    }    
`
