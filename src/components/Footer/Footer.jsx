import React from "react";
import "./Footer.css";
import logoImg from "../img/cbd16f02ecd93bbc4d7b2ad92d273e350353d94e.png";
import Line from "../LOGO/Line";
import Facebook from "../LOGO/Facebook";
import Instagram from "../LOGO/Instagram";
import Youtube from "../LOGO/Youtube";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logoImg} alt="" style={{ width: "138px", height: "37px" }} />
      </div>
      <div className="footer-firstLine">
        <Line />
      </div>
      <div className="footer-content-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "max-content",
          }}
        >
          <p>
            <b>ABOUT US</b>
          </p>
          <p>
            <b>FAQ</b>
          </p>
          <p>
            <b>CONTACT</b>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "max-content",
          }}
        >
          <p>
            <b>CUSTOMER SERVICE</b>
          </p>
          <p>
            <b>info@car.com</b>
          </p>
          <p>
            <b>240-865-3730</b>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "min-content",
          }}
        >
          <p>
            <b>3926 Calvin Street, Baltimore, Maryland, 21201, United State</b>
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Facebook />
            <Instagram />
            <Youtube />
          </div>
        </div>
      </div>

      <div>
        <Line />
      </div>
      <div className="footer-container-lastLine">
        <p>
          {" "}
          <b>2021 Autohunt. All Rights reserved</b>
        </p>
      </div>
    </div>
  );
}

export default Footer;
