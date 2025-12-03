import React from "react";
import "./Footer.css";
import logoImg from "../img/cbd16f02ecd93bbc4d7b2ad92d273e350353d94e.png";
import Line from "../LOGO/Line";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logoImg} alt="" style={{ width: "138px", height: "37px" }} />
      </div>
      <div className="footer-firstLine">
        <Line />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
