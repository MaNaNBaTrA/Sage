import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to Home</h1>
      <button onClick={handleLogout}>Log Out</button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="40 -0.01 79.98 48.39" className="looka-1j8o68f" style={{ maxWidth: '10%', height: 'auto' }}>
    <g transform="matrix(0.913, 0, 0, 0.913, 34.34, -20)" fill="#3c8e91">
      <polygon points="26.2,35.4 6.2,47.9 6.2,52.1 26.2,64.6 28.8,60.4 12.2,50 28.8,39.6" />
      <polygon points="71.2,39.6 87.8,50 71.2,60.4 73.8,64.6 93.8,52.1 93.8,47.9 73.8,35.4" />
      <polygon points="51.7,28.7 39,55.9 52.6,62.2 53.6,60 65.2,35 68.4,28.2 54.8,21.9" />
      <polygon points="38.4,74.9 50.5,66.8 36.9,60.4" />
    </g>
  </svg>

    </div>
  );
};

export default Home;
