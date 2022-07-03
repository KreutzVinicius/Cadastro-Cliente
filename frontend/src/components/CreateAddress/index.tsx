import { useContext, useState } from 'react';
import {api} from "../../services/api"
import { FormEvent } from 'react';
import { ClientContext } from '../../store/ClientContext';
import { Container } from './styles';
import { steps } from '../../store/StepsContext';


interface CreateAddressProps {
    onReopenNewTaskModal:  () => Promise<void>;
}

export function CreateAddress({ onReopenNewTaskModal}:CreateAddressProps) {
    const client = useContext(ClientContext);

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [CEP, setCEP] = useState('');
    const [address, setAddress] = useState('');
    const [houseNumber, setHouseNumber] = useState(0);
    const [complement, setComplement] = useState('');
    
    function HandleCreateAddress(event: FormEvent) {
    event.preventDefault();

    const data = {
    clientId: client.client.id,
    city,
    state,
    CEP,
    address,
    houseNumber,
    complement
    };
    console.log(data);
    api.post('/address' ,data)
    .then(response => console.log(response.data))
    
    steps.isStep3Complete = true
    onReopenNewTaskModal()

    }

    return (
            <Container>

                <h2>Cadastro Endereço</h2>

                <input
                    type="text"
                    placeholder='city'
                    value={city}
                    onChange={event => setCity(event.target.value)}
                />
                <input
                    type="text"
                    placeholder='state'
                    value={state}
                    onChange={event => setState(event.target.value)}
                />
                <input
                    type="text"
                    placeholder='CEP'
                    value={CEP}
                    onChange={event => setCEP(event.target.value)}
                />
                <input
                    type="text"
                    placeholder='address'
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                />
                <input
                    type="number"
                    placeholder='house Number'
                    value={houseNumber}
                    onChange={event => setHouseNumber(event.target.valueAsNumber)}
                />
                <input
                    type="text"
                    placeholder='complement'
                    value={complement}
                    onChange={event => setComplement(event.target.value)}
                />

                <button type="submit" onClick={HandleCreateAddress}>
                   Proximo
                </button>
                

            </Container>
    );
}