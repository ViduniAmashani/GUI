import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
    
            if (response.status === 200) {
                alert(data.message); 
                navigate('/home'); 
            } else {
                alert(data.message); 
                console.error('Error response:', data); 
            }
        } catch (error) {
            console.error('Error logging in:', error); 
            alert('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <div className="background">
            <img src="/register.jpg" alt="Background" className="bgimage" />
            <div className="wrapper1">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
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
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>

                    
                </form>
            </div>
        </div>
    );
}

export default Login;