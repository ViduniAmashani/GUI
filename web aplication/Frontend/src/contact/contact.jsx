import './contact.css'
import { useNavigate } from 'react-router-dom';


function Contact(){
    const Navigate = useNavigate();
    return(
        <div className="contact-container">
        <img src="/contact-image.jpg" alt="BackGround" className="backgroundimage" />
        <button className="go-home-btn" onClick={() => Navigate('/Home')}>GoHome</button>
        <section className='contact'>
        <div className='content'>
            <h2 className='header2'>Contact Us</h2>
            <p className='para'>
            At Salon Glamora, we’re here to bring out the best in you! Whether you have questions about our services, need help booking an appointment, or want to provide feedback, we’d love to hear from you. Our team is always ready to assist you with personalized care and attention. Reach out to us via phone, email, or visit us at our location—we’re just a call or message away! Let’s make your beauty journey truly glamorous.
            </p>
        </div>
        <div className='container'>
            <div className='contactInfo'>
                <div className='box'>
                    
                    <div className='text'>
                        <h6 className='header3'>Address</h6>
                        <p>123, Galle Road,Colombo 03,Sri Lanka.</p>
                    </div>
                </div>

                <div className='box'>
                    
                    <div className='text'>
                        <h6 className='header3'>Phone</h6>
                        <p>+94 11 2345678</p>
                    </div>
                </div>

                <div className='box'>
                    
                    <div className='text'>
                        <h6 className='header3'>Email</h6>
                        <p><a href="#"> info@salonglamora.lk</a></p>
                    </div>
                </div>


            </div>
        </div>
    </section>

        </div>
    );
}

export default Contact;