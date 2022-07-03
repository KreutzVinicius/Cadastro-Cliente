import { useState,FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { ClientContext } from '../../store/ClientContext';


export function Login() {
    const {loginClient} = useContext(ClientContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    async function handleLoginClient(event: FormEvent) {
        event.preventDefault();
        await loginClient({
                email,
                password
            })

       navigate("/home");
    }


    return (
     <div>
        <Container onSubmit={handleLoginClient}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder='email'
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder='senha'
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <br />

            
            
            <button type="submit">
            Login
            </button>
        </Container>
     </div>
    )
}