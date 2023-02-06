import { useState } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { postTaskApi } from "../../services/taskApi";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CustomForm, GrayContainer } from "../generics/generics";
import { upsertUserInfoApi } from "../../services/userInfoApi";

export default function UserInfoUpdate() {

    const { state } = useLocation();
    const [nickname, setNickname ] = useState(state?.nickname || '');
    const [picture, setPicture] = useState(state?.picture || '');
    const [status, setStatus] = useState(state?.status || '');

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: ({nickname, picture, status, id}) => upsertUserInfoApi({nickname, picture, status, id}),
        onSuccess: (data) => {
            toast.success("Status atualizado!!");
            setTimeout(() => navigate(`/board/${state.id}`), 2000);
        },
        onError: (data) => {
                toast.error("Algo de errado aconteceu.");
                return;
        },
    });

    function handleSubmit(e) {
        e.preventDefault();
        
        if(!nickname || !picture || !status) {
            toast.error("Preencha os campos corretamente!");
            return;
        };

        if(!state) {
            return <Navigate to='/' replace />;
        };
        
        mutation.mutate({nickname, picture, status, id: state.id})
    }

    return(
        <GrayContainer style={{textAlign:'initial', justifyContent: 'start'}}>
            <ToastContainer/>
            <CustomForm onSubmit={handleSubmit}>
                <label>Seu apelido</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite seu apelido"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                />
                <label>Sua foto</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="digite o URL da sua foto"
                    value={picture}
                    onChange={e => setPicture(e.target.value)}
                />
                <label>Seus status</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite seus status"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                />
                <button>
                    <span>Criar tarefa</span>
                </button>
            </CustomForm>
        </GrayContainer>
    )
}