import React from 'react';
import '../hmc_css/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import BookHomeVisit from './BookHomeVisit';
// import teamMember from './teamMembers';
// import Specialties from './Specialties';



const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-left">
          <span>About</span>
          <span>Academics</span>
          <span>CSR</span>
          <span>Career</span>
          {/* <span><a href="#">Doctor admin</a></span> */}
        </div>
        <div className="header-top-right">
          <div className="emergency-contact">
            <span>For Emergency Ambulance/Appointment</span>
            <a href="tel:+918888822222">+91 88888 22222</a>
          </div>
          <button className="second-opinion-btn">Second Opinion</button>
        </div>
      </div>
      
      <div className="header-main">
        <div className="logo">
          <img src="/logoSahyadri.jpg" alt="Sahyadri Hospitals" />
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><a href="#hospitals">Hospitals</a></li>
            <li><a href="/Specialities">Specialities</a></li>
            <li><a onClick={() => navigate('/healthcare-package')}>Health Packages</a></li>
            <li><a href="lab">Labs</a></li>
            <li><a href="#international-patients">International Patients</a></li>
            <li><a href="./teamMember">Find A Doctor</a></li>
          </ul>
          
        </nav>
        
        <div className="header-buttons">
          <Link to="/Lab/BookHomeVisit">
          <button className="home-care-btn" onClick={<BookHomeVisit />}>
          Home Care</button>
          </Link>
          
          
          <button className="hero-cta" onClick={() => navigate('/appointment')}>Book Appointment</button>
             
        </div>
        
        <div className="mobile-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header; 