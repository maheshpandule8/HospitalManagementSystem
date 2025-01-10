import React, { useState } from "react";
import "../hmc_css/HealthcarePackages.css";
import himage from "./pf4.jpg";

const HealthcarePackages = () => {
    const [activeLocation, setActiveLocation] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedPackageId, setExpandedPackageId] = useState(null);


    const locations = [
        { id: 1, name: "Deccan Gymkhana, Pune", locId: [1, 2, 3] },
        { id: 2, name: "Hadapsar, Pune", locId: [2, 4, 3]  },
        { id: 3, name: "Kothrud, Pune", locId: [3, 4, 3]  },
        { id: 4, name: "Nagar Road, Pune", locId: [7, 4, 3]  },
        { id: 5, name: "Kasba Peth, Pune", locId: [6, 4, 3]  },
        { id: 6, name: "Bibewadi, Pune", locId: [5,6, 4, 3]  },
        { id: 7, name: "Karad", locId: [7,2, 4, 3]  },
        { id: 8, name: "Nashik", locId: [1,7,2, 4, 3]  },
    ];

    const packages = [
        {
            locationId: 1,
            title: "Cancer Package",
            price: "₹2420",
            features: {
                femalesAbove40: ["Haemogram", "Pap Smear", "Mammography", "Physician Consultation", "Stool Occult Blood", "Chest X-Ray", "USG – Abdomen & Pelvis"],
                femalesBelow40: ["Haemogram", "Chest X-Ray", "Physician Consultation", "PAP Smear", "USG – Abdomen & Pelvis"],
                males: ["Haemogram", "Chest X-Ray", "USG – Abdomen & Pelvis", "Physician Consultation"],
            },
        },
        {
            locationId: 2,
            title: "Annual Package",
            price: "₹7260",
            features: {
                general: ["Complete Blood Count", "Liver Function Test", "Kidney Function Test", "Thyroid Profile", "ECG", "Chest X-Ray"],
            },
        },
        {
            locationId: 3, // Corresponds to "Kothrud, Pune"
            title: "Executive Package",
            price: "₹4840",
            features: {
                general: ["Complete Blood Count", "Liver Function Test", "Kidney Function Test", "Diabetes Screening", "ECG", "Chest X-Ray"],
                additional: ["Physician Consultation", "Dietician Consultation"],
            },
        },
        {
            locationId: 4, // Corresponds to "Nagar Road, Pune"
            title: "Women Package",
            price: "₹1815",
            features: {
                females: ["Haemogram", "Thyroid Profile", "Pap Smear", "Physician Consultation"],
            },
        },
        {
            locationId: 5, // Corresponds to "Karad"
            title: "Happy Heart Package",
            price: "₹3630",
            features: {
                general: ["ECG", "2D Echo", "Lipid Profile", "Blood Sugar", "Consultation with Cardiologist"],
            },
        },
        {
            locationId: 6, // Corresponds to "Nashik"
            title: "Second Innings Healthy Living Package",
            price: "₹4235",
            features: {
                seniors: ["Complete Blood Count", "Vitamin D", "Bone Density Test", "ECG", "Chest X-Ray", "Consultation with Geriatric Specialist"],
            },
        },
        {
            locationId: 7, // Corresponds to "Bibwewadi, Pune"
            title: "Foresight",
            price: "₹20570",
            features: {
                general: ["MRI Brain", "CT Scan", "Full Body Checkup", "Diabetes Panel", "Thyroid Panel"],
            },
        },
    ];

    const locations_card = [
        {
            name: "Hadapsar, Pune",
            address: "S. No. 163, Bhosale Garden Rd, Hadapsar, Pune - 411028",
            img: himage,
        },
        {
            name: "Deccan Gymkhana, Pune",
            address: "Plot No. 30-C, Erandwane, Karve Rd, Pune - 411004",
            img: himage,
        },
        {
            name: "Nagar Road, Pune",
            address: "Near Hermes Heritage, Nagar Rd, Pune - 411006",
            img: himage,
        },
        {
            name: "Kasba Peth, Pune",
            address: "S. No. 120, Kasba Peth, Pune - 411011",
            img: himage,
        },
        {
            name: "Kothrud, Pune",
            address: "Kothrud, Pune - 411038",
            img: himage,
        },
        {
            name: "Bibwewadi, Pune",
            address: "Bibwewadi, Pune - 411037",
            img: himage,
        },
    ];

    const LocationCard = ({ location }) => (
        <div className="l-card-item">
            <img src={location.img} alt={location.name} className="img-fluid" />
            <div className="l-card-body text-center">
                <h5>{location.name}</h5>
                <p>{location.address}</p>
                <i className="bi bi-geo-alt-fill location-icon"></i>
                <a href="#" className="d-block mt-2">
                    View Details &gt;
                </a>
            </div>
        </div>
    );


    const activePackage = packages.filter(pkg =>
        locations.find(loc => loc.id === activeLocation)?.locId?.includes(pkg.locationId)
    );

    const toggleDropdown = (packageId) => {
        setExpandedPackageId((prevId) => (prevId === packageId ? null : packageId));
    };
    const changeList = (locId) => {
        setActiveLocation(locId);
        setExpandedPackageId(null);
        const element = document.getElementById('healthcare-main-content');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }    };

    return (
        <div className="healthcare-page">
            <div className="healthcare-banner-container">
                <div className="healthcare-banner-content">
                    <h1 className="healthcare-banner-title">Sanjivani Preventive</h1>
                    <h2 className="healthcare-banner-subtitle">Health Packages</h2>
                </div>
                <img
                    src={himage} // Replace with the actual image URL
                    alt="Health Packages"
                    className="healthcare-banner-image"
                />
            </div>
            <div className="healthcare-location-with-packages">
                <div className="healthcare-sidebar">
                    <h3>Locations</h3>
                    <ul className="healthcare-location-list">
                        {locations.map(loc => (
                            <li
                                key={loc.id}
                                className={`healthcare-location-item ${loc.id === activeLocation ? "active" : ""}`}
                                onClick={() => changeList(loc.id)}
                            >
                                {loc.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="healthcare-main-content" id="healthcare-main-content">
                    {activePackage.length > 0 ? (
                        <>
                            <h3>
                                Healthcare Package List -{" "}
                                {locations.find((loc) => loc.id === activeLocation)?.name}
                            </h3>
                            {activePackage.map((pkg) => (
                                <div className="healthcare-package-card" key={pkg.locationId}>
                                    <div
                                        className="healthcare-package-header"
                                        onClick={() => toggleDropdown(pkg.locationId)}
                                    >
                                        <h4>{pkg.title}</h4>
                                        <div className="healthcare-package-header-right">
                                            <span className="healthcare-package-price">{pkg.price}</span>
                                            {/* <i
                                                className={`bi ${expandedPackageId === pkg.locationId
                                                    ? "bi-dash-circle"
                                                    : "bi-plus-circle"
                                                    }`}
                                            ></i> */}
                                            <button className="btn">Book Appointment</button>
                                            
                                        </div>
                                    </div>

                                    {/* Dropdown Content */}
                                    {expandedPackageId === pkg.locationId && (
                                        <div className={`healthcare-dropdown-content ${expandedPackageId === pkg.locationId ? "expand" : ""}`}>
                                            <PackageFeatures features={pkg.features} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>No package details available for this location.</p>
                    )}
                </div>


            </div>
            <div className="mt-5 l-cards">
                <h2 className="text-center mb-4">Different Locations</h2>
                <p className="text-center text-secondary">
                    Explore the different locations across Pune:
                </p>
                <div className="l-cards-list">
                    {locations_card.map((location, index) => (
                        <LocationCard key={index} location={location} />
                    ))}
                </div>
            </div>

        </div>
    );
};

const PackageFeatures = ({ features }) => {
    if (!features) {
        return <p>No features available for this package.</p>;
    }

    return (
        <div className={`healthcare-package-features`}>
            {Object.keys(features).map((group, index) => (
                <div key={index} className="healthcare-package-features-item">
                    <h5>{group.replace(/([A-Z])/g, " $1").toUpperCase()}</h5>
                    <ul>
                        {features[group].map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default HealthcarePackages;
