import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">
          <img
            src="/assets/banner.webp"
            alt="INGRESS"
            className="img-thumbnail"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              Dashboard
            </Link>
            <Link to="/Courses" className="nav-item nav-link">
              Courses
            </Link>
            <Link to="/Result" className="nav-item nav-link">
              Result
            </Link>
            <Link to="/Announcements" className="nav-item nav-link">
              Announcements
            </Link>
            <Link to="/Time-Table" className="nav-item nav-link">
              Time-Tables
            </Link>
            <Link to="/Clubs" className="nav-item nav-link">
              Clubs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
