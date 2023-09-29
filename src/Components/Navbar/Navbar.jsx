import { Link } from "react-router-dom";
import "./NavbarStyle.css";
function Navbar() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/Courses">Courses</Link>
                </li>
                <li>
                    <Link to="/Result">Result</Link>
                </li>
                <li>
                    <Link to="/Announcements">Announcements</Link>
                </li>
                <li>
                    <Link to="/Clubs">Clubs</Link>
                </li>
                <li>
                    <Link to="/Time-Table">Time Table</Link>
                </li>
            </ul>
        </>
    );
}
export default Navbar;
