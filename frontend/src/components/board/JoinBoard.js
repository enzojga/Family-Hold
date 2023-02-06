import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { joinBoardApi } from "../../services/boardApi";
import { CustomForm, GrayContainer } from "../generics/generics";
import TitleLine from "../generics/TitleLine";

export default function JoinBoard() {

    const [invite, setInvite] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if(!invite) {
            toast.error("Digite o código do convite!");
            return;
        }
        mutation.mutate(invite);
    }

    const mutation = useMutation({
        mutationFn: (invite) => joinBoardApi(invite),
        onSuccess: (data) => {
            console.log(data);
            toast.success("Entrou!");
            setTimeout(() => navigate(`/board/${data.data.board_id}`), 2000);
        },
        onError: (data) => {
            if(data.response.status === 409) {
                toast.error("Você já esta no quadro!");
                return;
            } else {
                toast.error("Algo de errado aconteceu.");
                return;
            }
        },
    });

    return(
        <GrayContainer style={{textAlign:'initial', justifyContent: 'start'}}>
            <ToastContainer/>
            <TitleLine text={'Entrar em um quadro'}/>
            <CustomForm onSubmit={handleSubmit}>
                <label>Código do convite</label>
                <input
                    type="text"
                    name="text"
                    placeholder="Insira o código do convite"
                    onChange={e => setInvite(e.target.value)}
                />
                <button>
                    <span>Entrar</span>
                </button>
            </CustomForm>
        </GrayContainer>
    )
}