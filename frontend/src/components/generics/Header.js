import { useNavigate } from "react-router-dom";
import logoLight from "../../assets/images/family-hold-light.png";
import { HeaderContainer } from "./generics";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    return(
        <HeaderContainer onClick={() => navigate("/home")}>
            <img src={logoLight} alt='logo'/>
            <h2>Olá, {userData?.username}</h2>
        </HeaderContainer>
    )
}
