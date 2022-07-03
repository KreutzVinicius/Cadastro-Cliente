import { useState } from "react";
import { Header } from "../components/Header";
import { Login } from "../components/Login";
import { NewClientModal } from "../components/NewClientModal";
import { ClientProvider } from "../store/ClientContext";
import { GlobalStyle } from "../styles/global";
import Modal from 'react-modal';


Modal.setAppElement('#root');

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
  
        <Login />
  
        <NewClientModal
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewClientModal}
          onReopenNewTaskModal={handleReopenNewClientModal}
        />
  
        <GlobalStyle />
      </ClientProvider>
    );
  };
  
  export default LoginHome;