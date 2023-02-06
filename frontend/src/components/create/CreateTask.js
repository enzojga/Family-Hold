import { useState } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { postTaskApi } from "../../services/taskApi";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CustomForm, GrayContainer } from "../generics/generics";

export default function CreateTask() {
    const { state } = useLocation();
    const [taskName, setTaskName] = useState('');
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: ({taskName, id}) => postTaskApi({taskName, id}),
        onSuccess: (data) => {
            toast.success("Tarefa criado!");
            setTimeout(() => navigate(`/board/${state}`), 2000);
        },
        onError: (data) => {
                toast.error("Algo de errado aconteceu.");
                return;
        },
    });

    function handleSubmit(e){
        e.preventDefault();
        if(!taskName) {
            toast.error("Insira um nome válido");
            return;
        };

        if(!state) {
            return <Navigate to='/' replace />;
        }

        mutation.mutate({taskName, id:state});
    }

    return (
        <GrayContainer style={{textAlign:'initial', justifyContent: 'start'}}>
            <ToastContainer/>
            <CustomForm onSubmit={handleSubmit}>
            <label>Nome da tarefa</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite o nome da tarefa"
                    onChange={e => setTaskName(e.target.value)}
                />
                <button>
                    <span>Criar tarefa</span>
                </button>
            </CustomForm>
        </GrayContainer>
    );
}
