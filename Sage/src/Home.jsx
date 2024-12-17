import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./firebase";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Marquee from "./components/Marquee";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="w-full h-full">
      <Navbar/>
      <Header/>
      <Marquee/>
      <Header/>
      {/* <button onClick={handleLogout}>Log Out</button> */}
    </div>
  );
};

export default Home;
