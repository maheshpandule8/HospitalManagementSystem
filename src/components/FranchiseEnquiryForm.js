import React, { useState } from 'react';
import './FranchiseEnquiryForm.css';


function FranchiseEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    businessDetails: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you soon.');
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="franchise-enquiry-form-container">
      <h2>Franchise Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="franchise-enquiry-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="businessDetails">Business Details</label>
          <textarea
            id="businessDetails"
            name="businessDetails"
            value={formData.businessDetails}
            onChange={handleChange}
            placeholder="Describe your business details"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter any additional message"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}

export default FranchiseEnquiryForm;
