import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AddUrlForm from './components/AddUrlForm/AddUrlFrom';
import UrlList from './components/UrlList/UrlList';
import Login from './components/Login/login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Salvar no armazenamento local
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remover do armazenamento local
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []); // Checa o estado do armazenamento local na montagem do componente

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Header onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<UrlList />} />
            <Route path="/add" element={<AddUrlForm />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
