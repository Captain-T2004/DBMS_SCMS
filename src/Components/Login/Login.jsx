import { useState } from "react";
import { database } from "../TempData/TempData";
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";
function Login() {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault(); // PREVENT PAGE RELOAD
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password === pass.value) {
                setIsSubmitted(true);
            }
            //console.log(isSubmitted); // STILL RETURN FALSE EVEN IF MATCH IS FOUND BECUASE IT IS UPDATED ASYNCHRONOUSOULY
        }
        if (isSubmitted) {
            navigate("/Dashboard");
        }
    };
    const renderForm = (
        <>
            <div className="form">
                <h1>
                    <b>Login</b>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <h3>
                            Welcome to Ingress. Hope you have a great time..
                        </h3>
                    </div>
                </form>
            </div>
        </>
    );
    return <>{renderForm}</>;
}

export default Login;
