import { useState } from "react";
import { Header } from "../components/Header";
import { ShowClient } from "../components/ShowClient";
import { ClientProvider } from "../store/ClientContext";
import { GlobalStyle } from "../styles/global";



const LoginHome = () => {
    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    function handleOpenNewClientModal() {
      setIsNewTaskModalOpen(true)
    }
  
    function handleCloseNewClientModal() {
      setIsNewTaskModalOpen(false)
     }

    async function handleReopenNewClientModal() {
      await setIsNewTaskModalOpen(false)
      setIsNewTaskModalOpen(false)
    }


     
    return (
        <ClientProvider >
         <Header 
        onOpenNewTaskModal={handleOpenNewClientModal}
        />
        <ShowClient />
  
        <GlobalStyle />
      </ClientProvider>
    );
  };
  
  export default LoginHome;