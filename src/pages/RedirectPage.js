// RedirectPage.js
import React, { useEffect, useState } from "react";

const RedirectPage = ({ redirectTo }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown === 0) {
        clearInterval(timer);
        window.location.href = redirectTo;
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, redirectTo]);

  return (
    <div className="redirect-page-container">
      <div className="redirect-card">
        <div className="image">
          <img src="/assets/login_page.png" alt="" />
        </div>
        <h1>You have been successfully logged out.</h1>
        <p>Redirecting to the login page in {countdown} seconds...</p>
      </div>
    </div>
  );
};

export default RedirectPage;
