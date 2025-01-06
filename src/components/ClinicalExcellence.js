import React, { useState } from 'react';
import '../hmc_css/ClinicalExcellence.css';

const ClinicalExcellence = () => {
  const [activeTab, setActiveTab] = useState('Specialities');

  const specialties = [
    { id: 1, name: 'Cardiology', icon: '/assets/images/cardio.png' },
    { id: 2, name: 'Cardiac Surgery', icon: '/assets/images/cardiac-surgery.jpg' },
    { id: 3, name: 'Oncology', icon: '/assets/imagese/oncology.jpg' },
    { id: 4, name: 'Neurology', icon: '/assets/images/ClinicalExcellence/neurology.jpg' },
    { id: 5, name: 'Neurosurgery', icon: '/assets/images/ClinicalExcellence/neurosurgery.jpg' },
    { id: 6, name: 'Orthopaedics', icon: '/assets/images/ClinicalExcellence/orthopaedics.jpg' },
    { id: 7, name: 'Gastroenterology', icon: '/assets/images/ClinicalExcellence/gastroenterology.jpg' },
    { id: 8, name: 'Liver Transplant', icon: '/assets/images/ClinicalExcellence/liver-transplant.jpg' },
    { id: 9, name: 'General Surgery', icon: '/assets/images/ClinicalExcellence/general-surgery.jpg' },
    { id: 10, name: 'Critical Care', icon: '/assets/images/ClinicalExcellence/critical-care.jpg' },
    { id: 11, name: 'Haemotology & Bone Marrow', icon: '/assets/images/ClinicalExcellence/haemotology.jpg' },
    { id: 12, name: 'Obstetrics & Gynaecology', icon: '/assets/images/ClinicalExcellence/gynaecology.jpg' },
    { id: 13, name: 'IVF', icon: '/assets/images/ClinicalExcellence/ivf.jpg' },
    { id: 14, name: 'Paediatrics', icon: '/assets/images/ClinicalExcellence/paediatrics.jpg' },
    { id: 15, name: 'Endocrinology', icon: '/assets/images/ClinicalExcellence/endocrinology.jpg' },
    { id: 16, name: 'Kidney Transplant', icon: '/assets/images/ClinicalExcellence/kidney-transplant.jpg' },
    { id: 17, name: 'Spine Surgery', icon: '/assets/images/ClinicalExcellence/spine-surgery.jpg' },
    { id: 18, name: 'Urology', icon: '/assets/images/ClinicalExcellence/urology.jpg' }
  ];

  return (
    <section className="clinical-excellence">
      <div className="excellence-container">
        <h2>Explore our Centers of Clinical Excellence</h2>
        <p>Explore Specialized Services Available at the Sahyadri Hospitals</p>

        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'Specialities' ? 'active' : ''}`}
            onClick={() => setActiveTab('Specialities')}
          >
            Specialities
          </button>
          <button 
            className={`tab-btn ${activeTab === 'Treatments' ? 'active' : ''}`}
            onClick={() => setActiveTab('Treatments')}
          >
            Treatments
          </button>
          <button 
            className={`tab-btn ${activeTab === 'Procedures' ? 'active' : ''}`}
            onClick={() => setActiveTab('Procedures')}
          >
            Procedures
          </button>
          <button 
            className={`tab-btn ${activeTab === 'Diseases' ? 'active' : ''}`}
            onClick={() => setActiveTab('Diseases')}
          >
            Diseases
          </button>
        </div>

        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <div key={specialty.id} className="specialty-card">
              <div className="specialty-icon">
                <img src="/cardio.png" alt={specialty.name} />
              </div>
              <span>{specialty.name}</span>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View All Specialilities</button>
        </div>
      </div>
    </section>
  );
};

export default ClinicalExcellence; 