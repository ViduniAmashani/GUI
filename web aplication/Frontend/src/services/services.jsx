import React from "react";
import './services.css';
import { useNavigate } from 'react-router-dom';

function Salon() {
    const Navigate = useNavigate();

    return (
        <div className="background">
            <img src="/register.jpg" alt="Background" className="bgimage" />
            <button className="go-home-btn" onClick={() => Navigate('/Home')}>GoHome</button>
            <div className="service-box">
                <h3 className="sheading">Haircut</h3>
                <p className="sparagraph">Trendy and classic styles for all ages.</p>
                <button className="book-now-btn" onClick={() => Navigate('/haircut')}>Book Now</button>
            </div>
            <div className="service-box">
                <h3 className="sheading">Facials</h3>
                <p className="sparagraph">Rejuvenate your skin with our luxurious facials.</p>
                <button className="book-now-btn" onClick={() => Navigate('/facial')}>Book Now</button>
            </div>
            
            <div className="service-box">
                <h3 className="sheading">Bridal Makeup</h3>
                <p className="sparagraph">Make your special day even more perfect.</p>
                <button className="book-now-btn" onClick={() => Navigate('/makeup')}>Book Now</button>
            </div>
            
        </div>
    );
}

export default Salon;