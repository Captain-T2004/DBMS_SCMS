// LogoutButton.js
import React from 'react';
import { Link } from "react-router-dom";
const LogoutButton = ({ onLogout }) => {
    return (
        <form onSubmit={onLogout}>
            <Link to="/redirect-page">LogOut&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </form>
    );
};

export default LogoutButton;
