import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, phone, email, password }),
            });

            const data = await response.json();
            if (response.status === 201) {
                alert(data.message);
                navigate('/home'); 
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering. Please try again.');
        }
    };

    return (
        <div className="background">
            <img src="/register.jpg" alt="Background" className="bgimage" />
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit" className="btn">Ok</button>
                        <button type="button" className="btn cancel" onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;