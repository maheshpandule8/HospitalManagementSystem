import React, { useState } from 'react';
import './BookHealthPackage.css';

function BookHealthPackage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your health package has been booked.`);
    setFormData({ name: '', email: '', phone: '', package: '', date: '' });
  };

  return (
    <div className="book-health-package">
      <h1>Book a Health Package</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="package">Select Package:</label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Package--</option>
            <option value="Basic Health Checkup">Basic Health Checkup</option>
            <option value="Advanced Health Checkup">Advanced Health Checkup</option>
            <option value="Cardiac Screening">Cardiac Screening</option>
            <option value="Diabetes Care Package">Diabetes Care Package</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
}

export default BookHealthPackage;
