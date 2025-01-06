// AppointmentList.js

import React, { useState } from "react";
import "../hmc_css/AppointmentList.css";

const AppointmentList = ({
	appointments,
	deleteAppointment,
	editAppointment,
	clearAppointments,
}) => {
	const [editedIndex, setEditedIndex] = useState(null);
	const [editedName, setEditedName] = useState("");
	const [editedDate, setEditedDate] = useState("");

	const handleEdit = (index) => {
		setEditedIndex(index);
		setEditedName(appointments[index].name);
		setEditedDate(appointments[index].preferredDate);
	};

	const handleSaveEdit = (index) => {
		editAppointment(index, editedName, editedDate);
		setEditedIndex(null);
		setEditedName("");
	};

	const handleCancelEdit = () => {
		setEditedIndex(null);
		setEditedName("");
	};

	return (
		<div className="container">
			<h1>Appointment List</h1>
			<table id="list">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Date of Birth</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Purpose</th>
						<th>Preferred Date</th>
						<th>Preferred Doctor</th>
						<th>Department</th>
						<th>Medical Conditions</th>
						<th>Medications</th>
						<th>Allergies</th>
						<th>Insurance</th>
						<th>Payment Preference</th>
						<th>Emergency Contact</th>
						<th>Comments</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{appointment.name}</td>
							<td>{appointment.dateOfBirth}</td>
							<td>{appointment.phone}</td>
							<td>{appointment.email}</td>
							<td>{appointment.purpose}</td>
							<td>{appointment.preferredDate}</td>
							<td>{appointment.preferredDoctor}</td>
							<td>{appointment.department}</td>
							<td>{appointment.medicalConditions}</td>
							<td>{appointment.medications}</td>
							<td>{appointment.allergies}</td>
							<td>{appointment.insurance}</td>
							<td>{appointment.paymentPreference}</td>
							<td>{appointment.emergencyContact}</td>
							<td>{appointment.comments}</td>
							<td>
								{editedIndex === index ? (
									<>
										<button
											onClick={() =>
												handleSaveEdit(index)
											}
										>
											Save
										</button>
										<button onClick={handleCancelEdit}>
											Cancel
										</button>
									</>
								) : (
									<>
										<button
											onClick={() => handleEdit(index)}
										>
											Edit
										</button>
										<button
											onClick={() =>
												deleteAppointment(index)
											}
										>
											Delete
										</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={clearAppointments}>Clear All Appointments</button>
		</div>
	);
};

export default AppointmentList;