import React, { useState } from 'react';
import '../hmc_css/Lab.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import FranchiseEnquiryForm from './FranchiseEnquiryForm';
import BookHealthPackage from './BookHealthPackage';
import BookHomeVisit from './BookHomeVisit';

// Import images for each service
import PathologyImage from '../assets/images/pf2.jpg';
import MicrobiologyImage from '../assets/images/pf4.jpg';
import BiochemistryImage from '../assets/images/pf3.jpg';
import CardiologyImage from '../assets/images/pf4.jpg';
import HematologyImage from '../assets/images/pf2.jpg';
import ImmunologyImage from '../assets/images/pf2.jpg';
import MolecularDiagnosticsImage from '../assets/images/pf3.jpg';
import ClinicalChemistryImage from '../assets/images/pf4.jpg';
import BloodBankImage from '../assets/images/pf4.jpg';

function Lab() {
  const [activeSection, setActiveSection] = useState('Pathology');

  const services = [
    {
      id: 'Pathology',
      title: 'Pathology',
      description: 'Comprehensive pathology services including blood tests, biopsy, and more.',
      image: PathologyImage,
    },
    {
      id: 'Microbiology',
      title: 'Microbiology',
      description: 'Advanced microbiological analysis for accurate infection detection.',
      image: MicrobiologyImage,
    },
    {
      id: 'Biochemistry',
      title: 'Biochemistry',
      description: 'State-of-the-art biochemistry tests for metabolic and organ function analysis.',
      image: BiochemistryImage,
    },
    {
      id: 'Cardiology',
      title: 'Cardiology',
      description: 'Specialized tests for heart health and diagnostics.',
      image: CardiologyImage,
    },
    {
      id: 'Hematology Lab',
      title: 'Hematology Lab',
      description: 'Analyzes blood samples to diagnose blood disorders and diseases like anemia, leukemia, and clotting disorders.',
      image: HematologyImage,
    },
    {
      id: 'Immunology/Serology Lab',
      title: 'Immunology/Serology Lab',
      description: 'Focuses on immune system responses. Performs tests for autoimmune diseases, allergies, and infections like HIV or hepatitis.',
      image: ImmunologyImage,
    },
    {
      id: 'Molecular Diagnostics Lab',
      title: 'Molecular Diagnostics Lab',
      description: 'Conducts advanced testing like PCR (Polymerase Chain Reaction) and genetic testing.',
      image: MolecularDiagnosticsImage,
    },
    {
      id: 'Clinical Chemistry Lab',
      title: 'Clinical Chemistry Lab',
      description: 'Specializes in chemical analysis of bodily fluids.',
      image: ClinicalChemistryImage,
    },
    {
      id: 'Blood Bank',
      title: 'Blood Bank',
      description: 'Provides imaging diagnostics such as X-rays, CT scans, MRIs, and ultrasounds.',
      image: BloodBankImage,
    },
  ];

  return (
    <section className="lab-section">
      {/* Top Buttons */}
      <div className="top-buttons-container">
        <div className="background-image"></div>
        <div className="top-buttons">
          <Link to="/Lab/BookHomeVisit">
            <button className="franchise-btn" onClick={<BookHomeVisit />}>
              Book Home Visit
            </button>
          </Link>
          <Link to="/Lab/BookHealthPackage">
            <button className="franchise-btn" onClick={<BookHealthPackage />}>
              Book Health Package
            </button>
          </Link>
          <Link to="/Lab/FranchiseEnquiryForm">
            <button className="franchise-btn" onClick={<FranchiseEnquiryForm />}>
              Franchise Enquiry
            </button>
          </Link>
        </div>
      </div>

      <div className="lab-container">
        {/* Left Sidebar */}
        <div className="lab-sidebar">
          <h3>Lab Services</h3>
          <ul className="lab-menu">
            {services.map((service) => (
              <li
                key={service.id}
                className={`lab-menu-item ${activeSection === service.id ? 'active' : ''}`}
                onClick={() => setActiveSection(service.id)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="lab-content">
          {services
            .filter((service) => service.id === activeSection)
            .map((service) => (
              <div key={service.id} className="lab-details">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <div className="lab-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Lab;
