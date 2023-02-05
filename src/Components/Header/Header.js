import React from "react";
import "./Header.css";
import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header className="header">
        <Topbar />
        <Navbar />
      </header>
    </>
  );
};

export default Header;
