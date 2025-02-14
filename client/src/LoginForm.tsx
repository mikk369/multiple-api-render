import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

interface LoginModalProps {
    onClose?: () => void;
  }

const LoginForm = ({onClose} : LoginModalProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageStatus, setMessageStatus] = useState(''); 

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost/iceswimming/server/user_login.php',
                {
                    username,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const result = response.data;

            if (result.status === 'success') {
                setMessage('Login successful!');
                setMessageStatus('success');
                // Handle successful login (e.g., redirect to dashboard or store the user session)
            } else {
                setMessage(result.message);
                setMessageStatus('error');
            }
        } catch (error) {
            setMessage('Error occurred during login.');
            console.error(error);
        }
    };

    return (
    <>
        <div className='login-form'>
        <div className="button-wrapper">
                 <button className="close-btn" onClick={onClose}>
                    <i className="fa-solid fa-x"></i>
                 </button>
            </div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p className={messageStatus === 'error' ? 'error-message' : 'success-message'}>{message}</p>
        </div>
    </>
    );
};

export default LoginForm;
