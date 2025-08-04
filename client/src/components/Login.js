import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import LoginImg from '../assets/login-img.png'; 
import '../styles/login.css';
import config from '../config';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`${config.API_URL}/api/auth/login`, {
                email,
                password
            });

            const { token, referralCode } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('referralCode', referralCode);

            navigate(`/dashboard/${referralCode}`);

        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    }
    
  return (
    <div className="login-page">
        <div className='login-hero-title'>Intern Portal</div>
        <img src={LoginImg} alt="Login" className="login-image" />
        <iframe src="https://lottie.host/embed/4513ef10-10f1-48bf-b69f-c64ed213eeff/x3Ze60qeI3.lottie"></iframe>
      
      <div className='login-container'>
        <div className='login-title'>Sign in or Log in to your Account</div>
        <div className='login-form'>
            <form onSubmit = {handleLogin}>
                <div className="form-group">
                    <div>
                        <label className='email-label'>Email:</label>
                    </div>
                    <div>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter email ID'/>
                    </div>
                </div><br/>
                <div className="form-group">
                    <div>
                        <label className='password-label'>Password:</label><br/>
                    </div>
                    <div>
                        <input type="password" id="password" value={password} onChange = {(e) => setPassword(e.target.value)} required placeholder='******'/>
                    </div>
                </div><br/>
                <button type="submit" className='login-btn'>Login</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <Link to="/register" className='register-link'>Don't have an account? Create one here</Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default Login;