// src/components/HealthPackages.js
import React, { useState } from 'react';
import './HealthPackage.css';

const packages = [
  {
    name: 'Cancer Package',
    price: 'Rs 2420/-',
    details: [
      'Stool Occult Blood',
      'Chest X-Ray',
      'USG - Abdomen & Pelvis',
      'PAP Smear',
      'Physician Consultation',
    ],
    recommendations: [
      {
        target: 'females above 40 Yrs',
        tests: ['Haemogram', 'Pap Smear', 'Mammography', 'Physician Consultation'],
      },
      {
        target: 'females below 40 Yrs',
        tests: ['Haemogram', 'Chest X-Ray', 'Physician Consultation'],
      },
      {
        target: 'male',
        tests: ['Haemogram', 'Chest X-Ray', 'PSA'],
      },
    ],
  },
];

const HealthPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="health-packages-container">
      <div className="menu-bar">
        <h3>Healthcare Package List - Deccan Gymkhana, Pune</h3>
        <ul>
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={selectedPackage === index ? 'active' : ''}
              onClick={() => setSelectedPackage(index)}
            >
              {pkg.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="package-details">
        {selectedPackage !== null ? (
          <div>
            <h3>{packages[selectedPackage].name}</h3>
            <p><strong>Price:</strong> {packages[selectedPackage].price}</p>
            <h4>Details:</h4>
            <ul>
              {packages[selectedPackage].details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <h4>Recommendations:</h4>
            {packages[selectedPackage].recommendations.map((rec, idx) => (
              <div key={idx} className="recommendation">
                <p><strong>Recommended for {rec.target}:</strong></p>
                <ul>
                  {rec.tests.map((test, id) => (
                    <li key={id}>{test}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>Please select a package to view details.</p>
        )}
      </div>
    </div>
  );
};

export default HealthPackage;
