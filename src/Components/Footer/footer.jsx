import { Link } from "react-router-dom";
import "../Footer/FooterStyle.css";
function Footer() {
    return (
        <div className="footer">
            <div>
                <div className="footer-content">
                    <h3
                        style={{
                            fontFamily: "Trebuchet MS",
                            fontSize: "2em",
                        }}
                    >
                        <Link to="/Dashboard" style={{ color: "white" }}>
                            Ingress
                        </Link>
                    </h3>
                    <p>Thank You for visiting our website...</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
