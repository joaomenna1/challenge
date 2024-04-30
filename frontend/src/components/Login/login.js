import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionamento

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simular autenticação básica
    if (username === 'admin' && password === '1234') {
      onLogin(); // Chama uma função para alterar o estado de login
      navigate('/'); // Redirecionar para a página principal
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nome de usuário"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
