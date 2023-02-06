import { Navigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Header from "./generics/Header";
import { useContext } from "react";

export default function PrivateRoute({ children }) {
    const { userData } = useContext(UserContext);
    if(window.innerWidth > 770) {
        return <Navigate to='/' replace />;
    };
    if (userData.token) {
        return (
            <>
                <Header />
                {children}
            </>
        );
    } else {
        return <Navigate to='/' replace />;
    }
}
