// App.js

import React, { useState } from "react";
import "./App.css";
import AppointmentForm from "./components/AppointmentForm";
import Calender from "./components/Calender";
import AppointmentList from "./components/AppointmentList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OPDSchedule from './components/OPDSchedule';
import Hero from './components/Hero';
import Team from './components/Team';
import OurDoctors from './components/OurDoctors';
import DoctorProfile from './components/DoctorProfile';

	
import DoctorRegistration from "./components/DoctorRegistration";


const App = () => {
	const [appointments, setAppointments] = useState([]);

	const addAppointment = (appointment) => {
		setAppointments([...appointments, appointment]);
	};

	const deleteAppointment = (index) => {
		const deletedAppointments = [...appointments];
		deletedAppointments.splice(index, 1);
		setAppointments(deletedAppointments);
	};

	const editAppointment = (index, editedName, editedDate) => {
		const updatedAppointments = [...appointments];
		updatedAppointments[index] = {
			name: editedName,
			date: editedDate,
		};
		setAppointments(updatedAppointments);
	};

	const clearAppointments = () => {
		setAppointments([]);
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="main-content">
					<Routes>
						
						
						<Route 
							path="/appointment" 
							element={
								<div className="appointment-container">
									<h1>Book an Appointment</h1>
									<AppointmentForm addAppointment={addAppointment} />
									<AppointmentList
										appointments={appointments}
										deleteAppointment={deleteAppointment}
										clearAppointments={clearAppointments}
										editAppointment={editAppointment}
									/>
								</div>
							} 
						/>
						<Route 
							path="/" 
							element={
								<div className="home-container">
									<Hero />
									<Team />
									<Calender />
									<DoctorRegistration/>
								</div>
							} 
						/>
						<Route path="/doctors" element={<OurDoctors />} />
						<Route path="/doctor/:id" element={<DoctorProfile />} />
						<Route path="/doctor-registration" element={<DoctorRegistration />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;