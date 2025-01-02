import React, { useState } from 'react';
import './HealthPackages.css';

const HealthPackages = () => {
  const [selectedLocation, setSelectedLocation] = useState('Deccan Gymkhana, Pune');

  const locations = [
    'Deccan Gymkhana, Pune',
    'Hadapsar, Pune',
    'Kothrud, Pune',
    'Nagar Road, Pune',
    'Kasba Peth, Pune',
    'Bibewadi, Pune',
    'Karad',
    'Nashik'
  ];

  const packages = [
    {
      id: 1,
      name: 'Cancer Package',
      tests: 'Tests 18: Haemogram, Pap Smear,...',
      recommended: 'Male & Female',
      price: '2420'
    },
    {
      id: 2,
      name: 'Annual Package',
      tests: 'Tests 22: Haemogram, Lipid Profile, Urea,...',
      recommended: '-',
      price: '7260'
    },
    {
      id: 3,
      name: 'Basic Package',
      tests: 'Tests 10: Haemogram, Lipid Profile, ECG, USG...',
      recommended: '-',
      price: '2420'
    },
    {
      id: 4,
      name: 'Executive Package',
      tests: 'Tests 16: Haemogram, Lipid Profile,Urea, Urine...',
      recommended: '-',
      price: '4840'
    },
    {
      id: 5,
      name: 'Women Packages',
      tests: 'Tests 7: Haemogram, PAP SMEAR, USG Abd-...',
      recommended: 'Women',
      price: '1815'
    },
    {
      id: 6,
      name: 'Happy Heart Package',
      tests: 'Tests 10: Haemogram, Urea, Lipid Profile, ECG...',
      recommended: '-',
      price: '3630'
    },
    {
      id: 7,
      name: 'Second Innings Healthy Living Package',
      tests: 'Tests 14: Haemogram, Lipid Profile, PSA (For...',
      recommended: '-',
      price: '4235'
    },
    {
      id: 8,
      name: 'Foresight',
      tests: 'Tests 20: Creatinine, Urea, Lipid Profile, VDRL,...',
      recommended: '40+ age group',
      price: '20570'
    }
  ];

  return (
    <section className="health-packages">
      <div className="packages-container">
        <h2>Sahyadri's Preventive Health Packages</h2>
        <p>Book Health Package as per your need</p>

        <div className="location-slider">
          {locations.map((location) => (
            <button
              key={location}
              className={`location-btn ${selectedLocation === location ? 'active' : ''}`}
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </button>
          ))}
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <div className="package-header">
                <h3>{pkg.name}</h3>
                <p className="tests">{pkg.tests}</p>
                <p className="recommended">
                  Recommended for: {pkg.recommended}
                </p>
              </div>
              <div className="package-footer">
                <div className="price">₹{pkg.price}/-</div>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View All Packages</button>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages; 