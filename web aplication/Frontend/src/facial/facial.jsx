import React, { useState } from "react";
import "./facial.css";
import { useNavigate } from 'react-router-dom';

function Facial() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone_number: formData.phone, 
                    date: formData.date, 
                    time: formData.time, 
                    service: formData.service, 
                }),
            });

            const data = await response.json();

            if (response.status === 201) {
                alert(data.message); 
                navigate('/services'); 
            } else {
                alert(data.message); 
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('An error occurred while booking the appointment. Please try again.');
        }
    };

    return (
        <div className="hbooking-form-container">
            <img src="/register.jpg" alt="Background" className="fbgimage" />
            <h2 className="cheading">Salon Booking Form</h2>
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Time:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Service:
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a service</option>
                            <option value="longlayer">Long Layer</option>
                            <option value="featheredcut">Feathered Cut</option>
                            <option value="ucut">U-Cut Haircut</option>
                        </select>
                    </label>
                </div>
                <button type="submit" className="hbookbutton">Book Appointment</button>
            </form>
        </div>
    );
}

export default Facial;