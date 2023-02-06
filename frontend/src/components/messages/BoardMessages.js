import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components'
import { getMessagessApi, sendMessageApi } from '../../services/messagesApi';
import { FormContainer, VerticalLine } from '../generics/generics';
import TitleLine from '../generics/TitleLine'
import Message from './Message'
import { IoIosPaperPlane } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

export default function BoardMessages({ id }) {
    const [message, setMessage] = useState('');
    const { data, isLoading, error, refetch } = useQuery(["messages", id], () => getMessagessApi(id), {refetchInterval: 1000});
    const refBody = useRef('');
    const mutation = useMutation({
        mutationFn: ({id, message}) => sendMessageApi({id, message}),
        onSuccess: (data) => {
            refetch();
            setMessage('');
        },
        onError: (data) => {
                toast.error("Algo de errado aconteceu.");
                console.log(data);
        },
    });
    useEffect(() => {
        refBody.current.scrollIntoView({behavior: 'smooth'});
    }, [data]);
    
    return(
        <>
            <TitleLine text={'Conversa'}/>
            <MessagesContainer> 
                {data?.data ? data?.data.map(m => <Message info={m}/>) : ''}
                <div ref={refBody}></div>
            </MessagesContainer>

            <SendMessageContaier>
                <VerticalLine/>
                <MessageFormContaier>
                    <CustomForm>
                        <input
                            type="text"
                            name="text"
                            placeholder="Escreva uma menssagem"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </CustomForm>
                    <Icon onClick={() => {if (message) {mutation.mutate({id, message})}}}>
                        <IoIosPaperPlane/>
                    </Icon>
                </MessageFormContaier>
            </SendMessageContaier>
        </>
    )
};

const MessagesContainer = styled.div`
    width: 100vw;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20vh;
`

const SendMessageContaier = styled.div`
    width: 100vw;
    height: 70px;
    align-self: end;
    position: fixed;
    bottom: 12vh;
`

const MessageFormContaier = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-evenly;
    background-color: #DFDFDF;
    padding-top: 10px;
`

const CustomForm = styled(FormContainer)`
    width: auto;
    input {
        width: 70vw;
        border-radius: 100px;
        border: 1px solid #961D3A;
        ::placeholder {
            font-size: 20px;
            padding-top: 10px;
            font-weight: 400;
        }
    }
`

const Icon = styled.div`
    background-color: #BE264C;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 80%;
        height: 80%;
        color: white;
    }
`
