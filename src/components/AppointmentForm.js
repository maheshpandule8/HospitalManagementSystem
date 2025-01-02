// AppointmentForm.js

import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [purpose, setPurpose] = useState("");
	const [preferredDate, setPreferredDate] = useState("");
	const [preferredDoctor, setPreferredDoctor] = useState("");
	const [department, setDepartment] = useState("");
	const [medicalConditions, setMedicalConditions] = useState("");
	const [medications, setMedications] = useState("");
	const [allergies, setAllergies] = useState("");
	const [insurance, setInsurance] = useState("");
	const [paymentPreference, setPaymentPreference] = useState("");
	const [emergencyContact, setEmergencyContact] = useState("");
	const [comments, setComments] = useState("");
	const [privacyAgreement, setPrivacyAgreement] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({
			name,
			dateOfBirth,
			phone,
			email,
			purpose,
			preferredDate,
			preferredDoctor,
			department,
			medicalConditions,
			medications,
			allergies,
			insurance,
			paymentPreference,
			emergencyContact,
			comments,
			privacyAgreement
		});
		// Reset form fields
		setName("");
		setDateOfBirth("");
		setPhone("");
		setEmail("");
		setPurpose("");
		setPreferredDate("");
		setPreferredDoctor("");
		setDepartment("");
		setMedicalConditions("");
		setMedications("");
		setAllergies("");
		setInsurance("");
		setPaymentPreference("");
		setEmergencyContact("");
		setComments("");
		setPrivacyAgreement(false);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-25">
						<label htmlFor="name">Full Name</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Your full name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="dob">Date of Birth</label>
					</div>
					<div className="col-75">
						<input
							type="date"
							id="dob"
							name="dob"
							value={dateOfBirth}
							onChange={(e) => setDateOfBirth(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="phone">Phone</label>
					</div>
					<div className="col-75">
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Your phone number.."
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="email">Email</label>
					</div>
					<div className="col-75">
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your email.."
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="purpose">Purpose of Visit</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="purpose"
							name="purpose"
							placeholder="Purpose of visit.."
							value={purpose}
							onChange={(e) => setPurpose(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="preferredDate">Preferred Date and Time</label>
					</div>
					<div className="col-75">
						<input
							type="datetime-local"
							id="preferredDate"
							name="preferredDate"
							value={preferredDate}
							onChange={(e) => setPreferredDate(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="preferredDoctor">Preferred Doctor</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="preferredDoctor"
							name="preferredDoctor"
							placeholder="Preferred doctor.."
							value={preferredDoctor}
							onChange={(e) => setPreferredDoctor(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="department">Department/Specialty</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="department"
							name="department"
							placeholder="Department.."
							value={department}
							onChange={(e) => setDepartment(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="medicalConditions">Existing Medical Conditions</label>
					</div>
					<div className="col-75">
						<textarea
							id="medicalConditions"
							name="medicalConditions"
							placeholder="Describe any medical conditions.."
							value={medicalConditions}
							onChange={(e) => setMedicalConditions(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="medications">Current Medications</label>
					</div>
					<div className="col-75">
						<textarea
							id="medications"
							name="medications"
							placeholder="List any current medications.."
							value={medications}
							onChange={(e) => setMedications(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="allergies">Allergies</label>
					</div>
					<div className="col-75">
						<textarea
							id="allergies"
							name="allergies"
							placeholder="List any allergies.."
							value={allergies}
							onChange={(e) => setAllergies(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="insurance">Insurance Information</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="insurance"
							name="insurance"
							placeholder="Insurance details.."
							value={insurance}
							onChange={(e) => setInsurance(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="paymentPreference">Payment Preferences</label>
					</div>
					<div className="col-75">
						<select
							id="paymentPreference"
							name="paymentPreference"
							value={paymentPreference}
							onChange={(e) => setPaymentPreference(e.target.value)}
						>
							<option value="">Select payment method</option>
							<option value="cash">Cash</option>
							<option value="card">Card</option>
							<option value="insurance">Insurance</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="emergencyContact">Emergency Contact</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="emergencyContact"
							name="emergencyContact"
							placeholder="Emergency contact name and phone.."
							value={emergencyContact}
							onChange={(e) => setEmergencyContact(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="comments">Comments/Notes</label>
					</div>
					<div className="col-75">
						<textarea
							id="comments"
							name="comments"
							placeholder="Any additional comments.."
							value={comments}
							onChange={(e) => setComments(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="privacyAgreement">Privacy Agreement</label>
					</div>
					<div className="col-75">
						<input
							type="checkbox"
							id="privacyAgreement"
							name="privacyAgreement"
							checked={privacyAgreement}
							onChange={(e) => setPrivacyAgreement(e.target.checked)}
						/>
						<label htmlFor="privacyAgreement">I agree to the privacy policy</label>
					</div>
				</div>
				<div className="row">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;