import './about.css';
import profilePic1 from '/owner.jpg'; 
import profilePic2 from '/person 2.jpg'; 
import profilePic3 from '/person 7.jpg';
import profilePic4 from '/person 11.jpg';
import { useNavigate } from 'react-router-dom';



function AboutUs() {
    const Navigate = useNavigate();
    return (
        <div className="background">
            <img src="/register.jpg" alt="Background" className="backbgimage" />
            <button className="go-home-btn" onClick={() => Navigate('/Home')}>GoHome</button>
            
            <div className="content">
                <div className="card">
                    <img className='card-image' src={profilePic1} alt="Profile picture"></img>
                    <h3>Emma Johnson</h3>
                    <p><strong>Owner</strong></p>
                    <p>Completed a Degree in Cosmetology</p>
                    <p>Completed Diploma in Business Management</p>
                    <p>Attended various advanced certification programs in hairstyling, skincare, and customer service</p>
                </div>

                <div className="card">
                    <img className='card-image' src={profilePic2} alt="Profile picture"></img>
                    <h3>Aiden Garcia</h3>
                    <p>Position: Salon Manager</p>
                    <p>Experience: 7 years</p>
                    <p>Specialties: Team management, customer service</p>
                </div>

                <div className="card">
                    <img className='card-image' src={profilePic3} alt="Profile picture"></img>
                    <h3>John Doe</h3>
                    <p>Position: Senior Stylist</p>
                    <p>Experience: 8 years</p>
                    <p>Specialties: Haircuts, color treatments, and styling</p>
                </div>

                <div className="card">
                    <img className='card-image' src={profilePic4} alt="Profile picture"></img>
                    <h3>Jane Smith</h3>
                    <p>Position: Skincare Specialist</p>
                    <p>Experience: 6 years</p>
                    <p>Specialties: Facials, skincare consultations, anti-aging treatments</p>
                </div>

                

                <div className='paragraph1'>
                    <h2 className='header2'>"Our Story"</h2>
                    <p className='para1'>
                        Established in [2008], [Salon Glamora] began as a small boutique salon with a vision to bring personalized beauty services to the community. Over the years, we have grown into a trusted destination for hair, skin, and beauty treatments, known for our dedication to quality and style. Our journey is built on a passion for creativity, innovation, and the belief that everyone deserves to feel confident and beautiful.
                    </p>
                    <p className='para1'>
                        Today, [Salon Glamora] combines decades of experience with the latest trends and techniques, offering a relaxing space where clients can unwind and transform their look. We take pride in being more than just a salon—we are a place where beauty meets artistry and where every visit feels like a retreat.
                    </p>
                </div>

                
            </div>
        </div>
    );
}

export default AboutUs;