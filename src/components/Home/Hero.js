import React from "react";
import cann_Logo from "./../../assets/cannoli2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="opaque">
        <nav className="navBar">
          <img src={cann_Logo} alt="Cannoli" style={{ display: "inline" }} />
          <ul className="ul">
            <li className="li">Home</li>
            <li className="li">Contact</li>
            <li className="li">Login/SignUp</li>
          </ul>
        </nav>
      </div>
      <div className="heroo">
        <div className="main">
          <main>
            Order your favourite meal from <br />
            Cannoli
          </main>
        <span className="button">Order Food</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
