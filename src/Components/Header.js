import React from "react";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="main-nav">
        <div className="container">
          <h1>LOGO</h1>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
