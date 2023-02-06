import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormContainer, UnderlineText } from "../generics/generics";
import IconLight from "../generics/IconLight";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { signInApi } from "../../services/userApi";
import { useMutation } from "react-query";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {userData, setUserData} = useContext(UserContext);

    const mutation = useMutation({
        mutationFn: ({username, password}) => signInApi({username, password}),
        onSuccess: (data) => {
            setUserData(data.data);
            console.log(userData);
            toast.success("Parabens!");
            setTimeout(() => navigate('/home'), 1000);
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
    });

    function handleLogin (e) {
        e.preventDefault();
        if(username.length < 4 || password.length < 4) {
            toast.error("Os campos de usuário e senha precisam ter ao menos 4 carácteres!");
            return;
        }
        mutation.mutate({username: username, password: password});
    }

    return(
        <Container>
            <ToastContainer/>
            <IconLight noText={true}/>
            <FormContainer onSubmit={handleLogin}>
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
                <button>
                    <span>Entrar</span>
                </button>
                <UnderlineText onClick={() => navigate("/sign-up")}>
                    Criar conta.
                </UnderlineText>
            </FormContainer>
        </Container>
    )
}
