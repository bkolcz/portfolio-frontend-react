import React from 'react';
import { useState } from 'react';
import '../../styles/login/login.scss';

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log(`You tried to log in with login: ${login} and password: ${password}`);
        // TODO logging
    }

    const register = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log(`You tried to register new user with login: ${login} and password: ${password}`);
        // TODO registering
    }

    return (
        <form className="login-form">
            <div className="row">
                <label htmlFor="login" className="login-label">Login:</label>
                <input className="login-input" type="text" placeholder="Login" name="login"
                    value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div className="row">
                <label htmlFor="password" className="login-label">Password:</label>
                <input className="login-input" type="text" placeholder="Password" name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="row">
                <button className="login-button login-button-register" onClick={register}>Register</button>
                <button className="login-button login-button-sign-in" onClick={signIn}>Sign in</button>
            </div>
        </form>
    );
};