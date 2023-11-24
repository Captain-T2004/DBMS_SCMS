import { useState } from "react";
import { database } from "../TempData/TempData";
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";
function Login() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
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
  const contactpopup=()=>{
    
  } 
  const renderForm = (
    <div className="login-container">
      <div className="form-pre">
        <div className="image">
          <img src="/assets/login_page.png" alt="" />
        </div>
        <div className="content">
          <h3>Login To Ingerss</h3>
          <p>“Ingress” is a student catalog management system designed to streamline academic processes </p>
        </div>
      </div>
      <div className="form-container">
        <h1>Ingress</h1>
        <h2>Welcome to Ingress
            <hr />
        </h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
          {/* <label htmlFor="username">Username:</label> */}
            <input
              type="text"
              id="username"
              name="uname"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="pass"
              placeholder="Password"
              required
            />
            <span id="showPassword" onClick={togglePassword}>
              {showPassword ? "Hide Password" : "Show Password"}
            </span>
          </div>
          <div className="form-group">
            <button type="submit">Sign in</button>
          </div>
          <a onClick={contactpopup()} href="#" id="needhelp">facing issue.. <span>Need Help?</span></a>

        </form>
      </div>
    </div>
  );
  return <>{renderForm}</>;
}

export default Login;
