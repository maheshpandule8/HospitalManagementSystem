import React from 'react';
import '../hmc_css/Specialties.css'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Emergency Care',
      description: '24/7 emergency services for critical and life-threatening conditions.',
      icon: '/images/icons/emergency.png',
    },
    // {
    //   id: 2,
    //   title: 'Outpatient Services',
    //   description: 'Comprehensive outpatient services for various specialties.',
    //   icon: '/images/icons/outpatient.png',
    // },
    // {
    //   id: 3,
    //   title: 'Laboratory Testing',
    //   description: 'Accurate and timely lab tests with advanced equipment.',
    //   icon: '/images/icons/lab.png',
    // },
    {
      id: 4,
      title: 'Surgical Procedures',
      description: 'State-of-the-art surgical facilities with experienced surgeons.',
      icon: '/images/icons/surgery.png',
    },
    
    
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Specialties</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
