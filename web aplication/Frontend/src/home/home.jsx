import './home.css';
import NavBar from '../navbar/navbar.jsx';

function Home() {
    return (
        <>
            <NavBar />
            <div className="home-container">
                <img src="/homeimage3.jpg" alt="BackGround" className="backgroundimage" />
                <div className='BodyContent'>
                    <h1 className="header-animation">Welcome to Salon Glamora</h1>
                    <p className='paragraph'>Where Beauty Meets Excellence</p>
                    <p className='paragraph'>Discover elegance and relaxation at <strong>Salon Glamora</strong>. Our skilled professionals are here to bring your beauty vision to life—be it a chic haircut, glowing skincare, or a moment of pampering. Step in and leave feeling confident, radiant, and renewed!</p>
                    <p className='paragraph'>Hot Lines -</p>
                    <p className='paragraph'>0112626510 / 0705674275</p>
                    <br />
                    <p className='paragraph'>Email - <a href="#">info@salonglamora.lk</a></p>
                </div>
            </div>
        </>
    );
}

export default Home;