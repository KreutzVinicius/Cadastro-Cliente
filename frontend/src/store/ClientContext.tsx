import {createContext, ReactNode, useState} from 'react'
import { api } from '../services/api';

interface Client {
    email: string,
    password: string,
    id: number
}

type ClientInput = Omit<Client, 'id'>;

interface ClientProviderProps {
 children: ReactNode;
}

interface ClientContextData {
    client : Client
    createClient: (client: ClientInput) => Promise<void>;
    loginClient: (client: ClientInput) => Promise<void>;
}

export const ClientContext = createContext<ClientContextData>(
    {} as ClientContextData
);

export function ClientProvider({children}:ClientProviderProps ) {
    const [client, setClient] = useState<Client>({} as Client);
    const [isLogged, setIsLogged] = useState(true)


    async function loginClient(client:ClientInput) {
        const response = await api.post('/login' ,client)
        if(response.data.id){
            localStorage.setItem('isLogged', JSON.stringify(isLogged));
            setClient(response.data)
            console.log(response.data)
        }

        
    }


    async function createClient(client:ClientInput){
        const response = await api.post('/client' ,client)
        setClient(response.data)
        console.log(response.data)
    }


    return (
        <ClientContext.Provider value={{client, createClient,loginClient}}>
        {children}
        </ClientContext.Provider>

    );
}


