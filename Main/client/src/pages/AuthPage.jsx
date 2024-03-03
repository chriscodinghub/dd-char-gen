// src/pages/AuthPage.js
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const navigate = useNavigate();

    // Define the handleLoginSuccess function
    const handleLoginSuccess = () => {
        navigate('/app/prompt'); // Adjust according to your routes
    };

    // Define the handleSignupSuccess function
    const handleSignupSuccess = () => {
        navigate('/app/prompt'); 
    };

    const toggleMode = () => setIsLoginMode(!isLoginMode);

    return (
        <div className="auth-container container py-5">
            <h2 className='h2'>{isLoginMode ? 'Login' : 'Sign up'}</h2>
            {isLoginMode
                ? <LoginForm onLoginSuccess={handleLoginSuccess} />
                : <SignupForm onSignupSuccess={handleSignupSuccess} />}
            <button className='btn btn-dark my-3' onClick={toggleMode}>
                 {isLoginMode ? 'Signup here' : 'Return to Log in'}
            </button>
        </div>
    );
}

export default AuthPage;