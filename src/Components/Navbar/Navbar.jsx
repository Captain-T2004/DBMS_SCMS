import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./NavbarStyle.css";
import LogoutButton from 'C:/Users/visha/OneDrive/Desktop/hi/DBMS_SCMS/src/Components/LogoutButton.js';

function Navbar() {
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        // Perform any necessary logout actions (e.g., clearing session data)
        setIsLoggedOut(true);
    };
    return (
        <>
            <div className = "sidenav">
                    <Link to="/Dashboard">Dashboard</Link>
                    <Link to="/Courses">Courses</Link>
                    <Link to="/Result">Result</Link>
                    <Link to="/Announcements">Announcements</Link>
                    <Link to="/Time-Table">Time Table</Link>
                    <Link to="/AccountAndSettings">Account/Settings</Link>
                    <LogoutButton onLogout={handleLogout} />
            </div>
        </>
    );
}
export default Navbar;
