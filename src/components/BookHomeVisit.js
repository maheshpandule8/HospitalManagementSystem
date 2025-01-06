import React, { useState } from 'react';
import '../hmc_css/BookHomeVisit.css';

function BookHomeVisit() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your home visit has been booked.`);
    setFormData({ name: '', phone: '', address: '', date: '', service: '' });
  };

  return (
    <div className="book-home-visit">
      <h1>Book a Home Visit</h1>
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
          <label htmlFor="address">Home Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
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

        <div className="form-group">
          <label htmlFor="service">Select Service:</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Service--</option>
            <option value="Doctor Consultation">Doctor Consultation</option>
            <option value="Nursing Services">Nursing Services</option>
            <option value="Lab Sample Collection">Lab Sample Collection</option>
            <option value="Physiotherapy">Physiotherapy</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Book Now</button>
      </form>
    </div>
  );
}

export default BookHomeVisit;
