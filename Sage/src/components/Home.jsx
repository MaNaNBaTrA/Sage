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
    </div>
  );
};

export default Home;
