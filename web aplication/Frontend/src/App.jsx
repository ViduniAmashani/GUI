import Register from "./register/register.jsx";
import AboutUs from "./about/about.jsx"
import Home from "./home/home.jsx";
import Navbar from "./navbar/navbar.jsx";
import Salon from "./services/services.jsx";
import HairCut from "./haircut/haircut.jsx";
import Facial from "./facial/facial.jsx";
import Makeup from "./makeup/makeup.jsx";
import Contact from './contact/contact.jsx'
import Login from "./login/login.jsx";


import React from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';



function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />  
        <Route path="/about" element={<AboutUs />} />  
        <Route path="/services" element={<Salon />} />  
        <Route path="/haircut" element={<HairCut />} />  
        <Route path="/facial" element={<Facial />} />
        <Route path="/makeup" element={<Makeup/>} />  
        <Route path="/register" element={<Register/>} />  
        <Route path="/contact" element={<Contact/>}/> 
        
        
        
       
          
      </Routes>
    </BrowserRouter>

     
   
     
   
    </div>
  );
}

export default App;

