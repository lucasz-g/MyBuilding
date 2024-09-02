import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Efeito para verificar o e-mail conforme o usuário digita
    useEffect(() => {
        if (email && !validateEmail(email)) {
            setEmailError('E-mail invalido');
        } else {
            setEmailError('');
        }
    }, [email]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
            // Lógica para o envio do formulário
            console.log('Formulário enviado com sucesso!');
        } else {
            console.log('Erro: E-mail inválido');
        }
    };

    return (
        <div className="container">
            <h1 className="container-title">MyBuilding</h1>
            <h2 className="subtitle">Login</h2>
            <div className="login-container">
                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Entrar</button>
                        <p className="forgot-password"><a href="#">Esqueceu sua senha?</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
