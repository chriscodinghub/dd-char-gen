import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginUser] = useMutation(LOGIN_USER);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await loginUser({
                variables: { email, password },
            });

            console.log('User logged in:', data.login);

            // Reset form fields
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="login-email" className="form-label">Email</label>
                <input
                    id="login-email"
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="login-password" className="form-label">Password</label>
                <input
                    id="login-password"
                    type="password"
                    className="form-control"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit" className="btn btn-dark">Log In</button>
        </form>
    );
}

export default LoginForm;
