import React, { useState } from 'react';
import '../../styles/login/login.scss';
import { AuthService } from '../../services/auth/auth.service';

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [registerState, setRegister] = useState("");
    const [registerStateCalass, setRegisterClass] = useState("");
    const authService: AuthService = new AuthService();

    const signIn = async (event: React.MouseEvent): Promise<void> => {
        event.preventDefault();
        console.log(`You tried to log in with login: ${login} and password: ${password}`);
        try {
            const response = await authService.signIn(login, password);
            const responseJson = await response.json();
            console.log(response);
            // TODO authorized session
            sessionStorage.setItem("t",responseJson.access_token);
            // TODO redirect to logged in and authorized
        } catch {
            // TODO failed login
        }
    }

    const register = async (event: React.MouseEvent): Promise<void> => {
        event.preventDefault();
        // TODO encrypt/hash password
        const response = await authService.register(login, password);
        const status = response.status !== 201;
        setRegister(status ? "Failed" : "Success");
        setRegisterClass(status ? "register-status register-failed" : "register-status register-success");
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
            <div className={registerStateCalass}>{registerState}</div>
        </form>
    );
};