import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./firebase";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Marquee from "./components/Marquee";
import Role from "./components/Role";
import Footer from "./components/Footer";
import Trademark from "./components/Trademark";

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
      <Role/>
      {/* <Header/> */}
      {/* <button onClick={handleLogout}>Log Out</button> */}
      <Footer/>
      <Trademark/>
    </div>
  );
};

export default Home;
