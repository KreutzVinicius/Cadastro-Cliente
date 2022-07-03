import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import Home from './pages/Home';
import LoginHome from "./pages/LoginHome";



export default function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewClientModal() {
    setIsNewTaskModalOpen(true)
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header 
         onOpenNewTaskModal={handleOpenNewClientModal}
          />}></Route>
        <Route index element={<LoginHome/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const container =  document.getElementById('root');
const root = createRoot(container as Element | DocumentFragment);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
