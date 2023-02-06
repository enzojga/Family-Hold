import styled from "styled-components"
import { FormContainer, OpacityContainer, VerticalLine } from "../generics/generics"
import { CiPaperplane } from "react-icons/ci";
import Warning from "./Warning";
import { useMutation, useQuery } from "react-query";
import { createWarningApi, getWarningsApi } from "../../services/warningApi";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { Navigate } from "react-router-dom";

export default function BoardWarnings({ id }) {

    const [textWarning, setTextWarning] = useState('');
    

    const { data, isLoading, error, refetch } = useQuery(["warnings", id], () => getWarningsApi(id));

    const mutation = useMutation({
        mutationFn: ({id, textWarning}) => createWarningApi({id, text: textWarning}),
        onSuccess: (data) => {
            refetch();
            toast.success("Aviso criado!");
            setTextWarning('');
        },
        onError: (data) => {
                toast.error("Algo de errado aconteceu.");
                console.log(data);
        },
    });

    if(error) {
        return <Navigate to='/home' replace />;
    }
    
    return (
        <>
            <ToastContainer/>
            <CreateWarningContainer>
                <CustomForm>
                <input
                        type="text"
                        name="text"
                        placeholder="Escreva um aviso"
                        value={textWarning}
                        onChange={e => setTextWarning(e.target.value)}
                    />
                </CustomForm>
                <Icon onClick={() => {mutation.mutate({ id, textWarning })}}>
                    <CiPaperplane/>
                </Icon>
            </CreateWarningContainer>
            <VerticalLine/>
            <WarningsContainer style={{ marginBottom: '11vh'}}>
                    <h1>
                        Recentes
                    </h1>
                    {data?.data.map(w => <Warning info={w} />)}
            </WarningsContainer>
        </>
    )
}

const CustomForm = styled(FormContainer)`
    width: auto;
    input {
        text-align: center;
        width: 70vw;
        border-radius: 100px;
        border: 1px solid #961D3A;
        ::placeholder {
            font-size: 30px;
            padding-top: 10px;
            font-weight: 400;
        }
    }
`

const CreateWarningContainer = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-evenly;
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

const WarningsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    h1 {
        font-weight: 800;
        font-size: 2em;
    }
`