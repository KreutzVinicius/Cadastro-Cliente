import { FormEvent } from "react";
import { Container } from "./styles";

interface RegistrationDoneProps {
    onRequestClose: () => void;
}

export function RegistrationDone({onRequestClose}:RegistrationDoneProps) {
    function closeModal(event: FormEvent) {
    event.preventDefault();
    onRequestClose();
    }
    
    return (
     <div>
        <Container>
            <h3>Cadastro Finalizado!</h3>

            <button type="submit"  onClick={closeModal}>
                Sign in
            </button>
            
        </Container>
     </div>
    )
}