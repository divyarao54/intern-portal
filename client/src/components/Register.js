import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css';
import RegisterImg from '../assets/register-img.png';
import config from '../config'; 

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${config.API_URL}/api/auth/register`, {
                name,
                email,
                password,
                referralCode
            });


            localStorage.setItem('token', response.data.token);
            localStorage.setItem('referralCode', response.data.referralCode);

            navigate(`/dashboard/${response.data.referralCode}`);

        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    }

    return (
        <div className="register-page">
            <div className='register-hero-title'>Intern Portal</div>
            <img src={RegisterImg} alt="Register" className="register-image" />

            <div className="register-container">
            <div className="register-title">Register with us</div>
            <div className='register-form'>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label className="register-name-label">Name:</label>
                        <input id="register-name" type="text" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label className="register-email-label">Email:</label>
                        <input id="register-email" type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="enter email ID"/>
                    </div>
                    <div className="form-group">
                        <label className="register-password-label">Password:</label>
                        <input id="register-password" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="******"/>
                    </div>
                    <div className="form-group">
                        <label className="register-referral-label">Referral Code:</label>
                        <input id="register-referral" type="text" value={referralCode} required onChange={(e) => setReferralCode(e.target.value)} placeholder="Enter referral code"/>            
                    </div><br/>
                    <button type="submit" className="register-btn">Register</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
                <Link to="/" className='login-link'>Already have an account? Login here</Link>
            </div>
        </div>
    </div>
  );
}  

export default Register;