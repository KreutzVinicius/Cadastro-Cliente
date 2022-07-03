import { useContext, useState } from 'react';
import {api} from "../../services/api"
import { FormEvent } from 'react';
import { Container } from './styles';
import { steps } from '../../store/StepsContext';
import { ClientContext } from '../../store/ClientContext';

interface CreatePersonalProps {
    onReopenNewTaskModal: () => Promise<void>;
}

export function CreatePersonal({onReopenNewTaskModal }:CreatePersonalProps) {
    const client = useContext(ClientContext);

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [CPF, setCPF] = useState('');
    const[promotions, setPromotions] = useState(false);
    const[news, setNews] = useState(false);

    function handleChangeNews() {
        setNews(!news)
    }
    function handleChangePromotions() {
        setPromotions(!promotions)
    }

    function HandleCreatePersonal(event: FormEvent) {
    event.preventDefault();
    const data = {
    clientId: client.client.id,
    name: nome,
    lastName: sobrenome,
    CPF,
    promotions,
    news
    };


    console.log(data);

    api.post('/personal' , data)
    .then(response => console.log(response.data))

    steps.isStep2Complete = true
    onReopenNewTaskModal()
    }


    return (
            <Container>
                <h2>Cadastro Pessoal</h2>

                <input
                    type="text"
                    placeholder='nome'
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                />
                 <input
                    type="text"
                    placeholder='sobrenome'
                    value={sobrenome}
                    onChange={event => setSobrenome(event.target.value)}
                />
                 <input
                    type="text"
                    placeholder='CPF'
                    value={CPF}
                    onChange={event => setCPF(event.target.value)}
                />

                <label className="switch"> 
                <input type="checkbox"
                 placeholder='promotions'
                 checked = {promotions}
                 onChange={handleChangePromotions}
                />
                <span className="slider round"> </span>
                </label>
                <span>Promoções</span>


                <label className="switch"> 
                <input type="checkbox"
                 placeholder='news'
                 checked = {news}
                 onChange={handleChangeNews}
                />
                <span className="slider round"> </span>
                </label>
                <span>Novidades</span>

                <button onClick={HandleCreatePersonal} type="submit">
                   Proximo
                </button>


            </Container>
    );
}