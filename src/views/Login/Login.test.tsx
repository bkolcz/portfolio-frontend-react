import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login form with register and sign in', () => {
    render(<Login />);
    const loginLabel = screen.getByText(/login/i);
    const loginInput = screen.getByPlaceholderText(/login/i);
    const passwordLabel = screen.getByText(/password/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const registerButton = screen.getByText(/register/i);
    const signInButton = screen.getByText(/sign in/i);

    expect(loginLabel).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
});