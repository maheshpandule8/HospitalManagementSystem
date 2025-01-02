import React from 'react';
import './Locations.css';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Deccan Gymkhana, Pune',
      address: 'Plot No. 30-C, Erandvane, Karve Rd, Deccan Gymkhana, Pune - 411004',
      image: '/imgLocation1.jpg'
    },
    {
      id: 2,
      name: 'Nagar Road, Pune',
      address: 'Near Hermes Heritage, Nagar Rd, Shastrinagar, Yerawada, Pune - 411006',
      image: '/imgLocation2.jpg'
    },
    {
      id: 3,
      name: 'Hadapsar, Pune',
      address: 'S. No. 163, Bhosale Garden Rd, Bhosale Nagar,Hadapsar, Pune - 411028',
      image: '/imgLocation3.jpg'
    },
    {
      id: 4,
      name: 'Hadapsar Annexe',
      address: '163A/1A/7, First Floor, 163A/1A/6, Near, Bhosale Garden Rd, Pune - 411028',
      image: '/imgLocation4.jpg'
    }
  ];

  return (
    <section className="locations">
      <div className="locations-container">
        <h2>Our Locations</h2>
        <p>Sahyadri Hospitals is the largest chain of hospitals in Maharashtra</p>

        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-image">
                <img src={location.image} alt={location.name} />
              </div>
              <div className="location-content">
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <div className="location-buttons">
                  <button className="map-btn">
                    <img src="/map-icon.svg" alt="Map" />
                  </button>
                  <button className="facilities-btn">View Facilities</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="navigation-arrows">
          <button className="nav-arrow prev">‹</button>
          <button className="nav-arrow next">›</button>
        </div>
      </div>
    </section>
  );
};

export default Locations; 