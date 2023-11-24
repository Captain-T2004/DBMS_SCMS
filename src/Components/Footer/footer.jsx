// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../Footer/FooterStyle.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">
            {/* You can add a logo or site name here */}
            <img src="/assets/login_page.png" alt="Logo" />
            <h2>Ingress</h2>
          </div>
          <p id="footerlogopara" >Empowering Education</p>
          <p id="footerpara">
            Ingress is committed to providing a seamless
            educational experience, offering a range of services from course
            management to result tracking.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/Dashboard" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Courses" className="footer-link">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/Result" className="footer-link">
                  Result
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Other Pages</h4>
            <ul>
              <li>
                <Link to="/Announcements" className="footer-link">
                  Announcements
                </Link>
              </li>
              <li>
                <Link to="/Time-Table" className="footer-link">
                  Time Table
                </Link>
              </li>
              <li>
                <Link to="/AccountAndSettings" className="footer-link">
                  Account/Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <p>&copy; 2023 Ingress - Student Catalogue Management System</p>
      </div>
    </div>
  );
}

export default Footer;
