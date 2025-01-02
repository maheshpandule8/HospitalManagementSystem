import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import DoctorSearch from './components/DoctorSearch';
import ClinicalExcellence from './components/ClinicalExcellence';
import WhyChoose from './components/WhyChoose';
import PatientExperience from './components/PatientExperience';
import LatestBlogs from './components/LatestBlogs';
import HealthPackages from './components/HealthPackages';
import Locations from './components/Locations';
import Footer from './components/Footer';
import './App.css';
import './animations.css';
import AppointmentForm from './components/AppointmentForm';
import Lab from './components/Lab';
import BookHomeVisit from './components/BookHomeVisit';
import BookHealthPackage from './components/BookHealthPackage';
import FranchiseEnquiryForm from './components/FranchiseEnquiryForm';
import HealthPackage from './components/HealthPackage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <div>
              <Hero />
              </div>
             
              <DoctorSearch />
              <ClinicalExcellence />
              <WhyChoose />
              <PatientExperience />
              <LatestBlogs />
              <HealthPackages />
              <Locations />
              <Footer />
             <HealthPackage/>
            </>
          } />
          <Route path="/doctors" element={<DoctorSearch />} />
          <Route path="/lab" element={<Lab/>}/>
          <Route path="/lab/bookHomeVisit" element={<BookHomeVisit/>}/>
          <Route path="lab/bookHealthPackage" element={<BookHealthPackage/>}/>
          <Route path="/lab/FranchiseEnquiryForm"element={<FranchiseEnquiryForm/>}/>
         
          <Route 
							path="/appointment" 
							element={
								<div className="appointment-container">
									<h1>Book an Appointment</h1>
									<AppointmentForm  />
								
								</div>
							} 
						/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
