import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormContainer, UnderlineText } from "../generics/generics";
import { useMutation } from "react-query";
import IconLight from "../generics/IconLight";
import { signUpApi } from "../../services/userApi";
import { toast, ToastContainer } from 'react-toastify';

export default function SignUp() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const mutation = useMutation({
        mutationFn: ({username, password}) => signUpApi({username, password}),
        onSuccess: (data) => {
            toast.success("Parabens!");
            setTimeout(() => navigate('/sign-in'), 1000);
        },
        onError: (data) => {
            if(data.response.status === 409) {
                toast.error("Usuário já cadastrado!");
                return;
            } else {
                toast.error("Algo de errado aconteceu.");
                return;
            }
        },
    },
    );

    function handleRequest(e) {
        e.preventDefault();
        if(password !== confirmPassword) {
            toast.error("As senhas devem coincidir!");
            return;
        }
        if(username.length < 5 || password.length < 5) {
            toast.error("Os campos de usuário e senha precisam ter ao menos 5 carácteres!");
            return;
        }
        mutation.mutate({username: username, password: password});
    }

    return(
        <Container>
            <ToastContainer/>
            <IconLight noText={true}/>
            <FormContainer onSubmit={handleRequest}>
                <label>Usuário</label>
        	    <input
                    type="text"
                    name="text"
                    placeholder="Digite seu usuário"
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Senha</label>
        	    <input
                    type="password"
                    name="text"
                    placeholder="Digite sua senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <label>Confirmar senha</label>
        	    <input
                    type="password"
                    name="text"
                    placeholder="Confirmar senha"
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button>
                    <span>Criar conta</span>
                </button>
                <UnderlineText onClick={() => navigate("/sign-in")}>
                    Entrar
                </UnderlineText>
            </FormContainer>
        </Container>
    )
}
