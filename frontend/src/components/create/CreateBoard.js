import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoardIcons from "../generics/BoardIcons";
import { AlternativeButton, FormContainer, GrayContainer, IconContainer } from "../generics/generics";
import Header from "../generics/Header";
import { toast, ToastContainer } from 'react-toastify';
import { createBoardApi } from "../../services/boardApi";
import { useMutation } from "react-query";

export default function CreateBoard() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [invite, setInvite] = useState('');
    const [selectedIcon, setIcon] = useState(-1);

    const mutation = useMutation({
        mutationFn: ({name, invite, selectedIcon}) => createBoardApi({name, icon: selectedIcon, invite}),
        onSuccess: (data) => {
            toast.success("Quadro criado!");
            setTimeout(() => navigate('/home'), 2000);
        },
        onError: (data) => {
            if(data.response.status === 409) {
                toast.error("Convite já cadastrado!");
                return;
            } else {
                toast.error("Algo de errado aconteceu.");
                return;
            }
        },
    });

    function handleSubmit(){
        if(name.length < 5 || name.length > 12) {
            toast.error("O nome do quadro precisa ter no minímo 5 carácteres e no maximo 12");
            return;
        }
        mutation.mutate({name, invite, selectedIcon});
    }

    return(
        <GrayContainer style={{textAlign:'initial', justifyContent: 'start'}}>
            <ToastContainer/>
            <Header/>
            <CustomForm>
                <label>Nome do quadro</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite o nome do quadro"
                    onChange={e => setName(e.target.value)}
                />
                <label>Código do convite</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Insira o código do convite"
                    onChange={e => setInvite(e.target.value)}
                />
                <label>Ícones</label>
            </CustomForm>
            <IconContainer>
                <BoardIcons icon={1} selectedIcon={selectedIcon} setIcon={setIcon} />
                <BoardIcons icon={2} selectedIcon={selectedIcon} setIcon={setIcon}/>
                <BoardIcons icon={3} selectedIcon={selectedIcon} setIcon={setIcon}/>
                <BoardIcons icon={4} selectedIcon={selectedIcon} setIcon={setIcon}/>
            </IconContainer>
            <AlternativeButton onClick={handleSubmit}>
                <span>Criar</span>
            </AlternativeButton>
        </GrayContainer>
    )
}

const CustomForm = styled(FormContainer)`
    margin-top: 30px;
    label {
        color: black;
        font-weight: 400;
    }
`
