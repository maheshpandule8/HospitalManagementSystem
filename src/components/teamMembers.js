import React, { useState } from "react";
import "../hmc_css/Team.css";
import doctor1 from "../assets/images/doctor/doc1.webp";
// import doctor2 from "../assets/images/";
// import doctor3 from "../assets/images/image (11).webp";

const Team = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="team-section py-5">
            <h3 className="team-title" style={{ color: 'hsl(206, 92.40%, 46.50%)', marginLeft: "50px" }}>
                Our Team of Experts
            </h3>
            <div className="team-container">
                {/* Team Member Cards */}
                <div className="team-card p-4 shadow rounded text-center">
                    <img
                        src={doctor1}
                        alt="Doctor"
                        className="team-img rounded-circle mb-3"
                    />
                    <h2 className="team-member-name">Dr. Rajiv Singh</h2>
                    <h5 className="team-member-title">Senior Director</h5>
                    <p className="team-member-info text-muted mb-2">MBBS, MD - Cardiology Science</p>
                    <hr />
                    <button className="btn btn-primary" onClick={handleOpenModal}>
                        View Profile
                    </button>
                </div>

                <div className="team-card p-4 shadow rounded text-center">
                    <img
                        src={doctor1}
                        alt="Doctor"
                        className="team-img rounded-circle mb-3"
                    />
                    <h2 className="team-member-name">Dr. Michael Brown</h2>
                    <h5 className="team-member-title">Associate Director</h5>
                    <p className="team-member-info text-muted mb-2">MBBS, MD - Neurology</p>
                    <hr />
                    <button className="btn btn-primary" onClick={handleOpenModal}>
                        View Profile
                    </button>
                </div>

                <div className="team-card p-4 shadow rounded text-center">
                    <img
                        src={doctor1}
                        alt="Doctor"
                        className="team-img rounded-circle mb-3"
                    />
                    <h2 className="team-member-name">Dr. Sophia Green</h2>
                    <h5 className="team-member-title">Associate Director</h5>
                    <p className="team-member-info text-muted mb-2">MBBS, MD - Pediatrics</p>
                    <hr />
                    <button className="btn btn-primary" onClick={handleOpenModal}>
                        View Profile
                    </button>
                </div>
                <div className="team-card p-4 shadow rounded text-center">
                    <img
                        src={doctor1}
                        alt="Doctor"
                        className="team-img rounded-circle mb-3"
                    />
                    <h2 className="team-member-name">Dr. Sophia Green</h2>
                    <h5 className="team-member-title">Associate Director</h5>
                    <p className="team-member-info text-muted mb-2">MBBS, MD - Pediatrics</p>
                    <hr />
                    <button className="btn btn-primary" onClick={handleOpenModal}>
                        View Profile
                    </button>
                </div>
                <div className="team-card p-4 shadow rounded text-center">
                    <img
                        src={doctor1}
                        alt="Doctor"
                        className="team-img rounded-circle mb-3"
                    />
                    <h2 className="team-member-name">Dr. Sophia Green</h2>
                    <h5 className="team-member-title">Associate Director</h5>
                    <p className="team-member-info text-muted mb-2">MBBS, MD - Pediatrics</p>
                    <hr />
                    <button className="btn btn-primary" onClick={handleOpenModal}>
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Team;
