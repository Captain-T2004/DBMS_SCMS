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
        <h1>"You are being logged out successfully."</h1>
        <p>Please wait for {countdown} seconds... to be redirected to the login page.</p>
      </div>
    </div>
  );
};

export default RedirectPage;
