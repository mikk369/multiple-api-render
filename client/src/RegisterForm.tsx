import { useState } from 'react';
import axios from 'axios';

interface RegisterFormProps {
    onClose: () => void;
  }

const RegisterForm = ({onClose}: RegisterFormProps) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageStatus, setMessageStatus] = useState(''); 

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/iceswimming/server/user_register.php', {
                username,
                email,
                password},
                { headers: { 'Content-Type': 'application/json' } } 
              );
            const result = response.data;

            if (result.status === 'success') {
                setMessage('User registered successfully!');
                setMessageStatus('success');
            } else {
                setMessage(result.message);
                setMessageStatus('error');
            }
        } catch (error) {
            setMessage('Error occurred during registration.');
        }
    };

    return (
        <div className='register-form'>
            <div className="button-wrapper">
                 <button className="close-btn" onClick={onClose}>
                    <i className="fa-solid fa-x"></i>
                 </button>
            </div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
            <p className={messageStatus === 'error' ? 'error-message' : 'success-message'}>{message}</p>
        </div>
    );
};

export default RegisterForm;
