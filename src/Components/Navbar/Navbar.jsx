import { Link } from "react-router-dom";
import "./NavbarStyle.css";
function Navbar() {
    return (
        <>
            <div className = "sidenav">
                    <Link to="/Dashboard">Dashboard</Link>
                    <Link to="/Courses">Courses</Link>
                    <Link to="/Result">Result</Link>
                    <Link to="/Announcements">Announcements</Link>
                    <Link to="/Clubs">Clubs</Link>
                    <Link to="/Time-Table">Time Table</Link>
            </div>
        </>
    );
}
export default Navbar;
