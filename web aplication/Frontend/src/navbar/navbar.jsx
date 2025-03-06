import React from "react";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar(){
     const Navigate = useNavigate();
     const gotolog = () =>{
        Navigate("/");
     }


    return (
        <div>
            <nav className='navbar'><h2 className='Header'></h2>
            <img src="/salon-logo-new.png" alt="Logo" className="navbar-logo" />
                <ul className='navbar-links'>
                    <li className="nav"><a href="#">Home</a></li>
                    <li className="nav"><Link to="/about">About</Link></li>
                    <li className="nav"><Link to="/services">Services</Link></li>
                    <li className="nav"><Link to="/contact">Contact</Link></li>
                    
                    
                </ul>
                <button type="submit" onClick = {gotolog} className="loginbtn">Logout</button>
            </nav>
        </div>
    );
}

export default Navbar;