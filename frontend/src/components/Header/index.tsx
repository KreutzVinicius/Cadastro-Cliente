import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal }: HeaderProps) {
    const [isLogged, setIsLogged] = useState({} as boolean);
    const navigate = useNavigate();

    useEffect(()=>{
        checkIsLogged()
    },[isLogged]);

    function setIsLoggedFalse(){
        setIsLogged(false)
        localStorage.clear()
        navigate("/");
    }

    function checkIsLogged(){
        let aux = localStorage.getItem('isLogged')
        console.log(aux)
        if (aux) {
            return <button type="button" onClick={setIsLoggedFalse} >Logout</button>
        }else{
            return <button type="button" onClick={onOpenNewTaskModal}> Criar Conta</button>
        }
    }

    

    return (

        <Container>

            <Content>
                {checkIsLogged()}
            </Content>

        </Container >
    )
}
