import React from "react";
import "./Contact.css";
import mapImg from "../../img/HOME img/map.png";

function Contact() {
  return (
    <div className="home-contact-container">
      <div className="home-contact-img">
        {" "}
        <img src={mapImg} alt="" />
      </div>
      <div className="home-contact-form">
        <p className="home-form-title">Contact</p>
        <form className="home-contact-form-content" action="">
          123
        </form>
      </div>
    </div>
  );
}

export default Contact;
