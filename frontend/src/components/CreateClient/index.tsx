import { useContext, useState } from 'react';
import { FormEvent } from 'react';
import { Container } from './styles';
import {steps} from "../../store/StepsContext";
import { ClientContext } from '../../store/ClientContext';


interface CreateClientProps {
    onReopenNewTaskModal: () => Promise<void>;
}

export function CreateClient({onReopenNewTaskModal }:CreateClientProps) {
    const {createClient} = useContext(ClientContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function HandleCreateClient(event: FormEvent) {
    event.preventDefault();
    await createClient({
            email,
            password
        })
    
    
    steps.isStep1Complete = true 
    onReopenNewTaskModal()
    }
    

    return (
            <Container>

                <h2>Cadastrar Cliente</h2>

                <input
                    type="text"
                    placeholder='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                 <input
                    type="password"
                    placeholder='senha'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit"  onClick={HandleCreateClient}>
                   Proximo
                </button>
            </Container>
    );
}