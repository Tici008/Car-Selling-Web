import React from "react";
import "./About.css";
import aboutImg from "../../img/HOME img/About us.jpg";
function About() {
  return (
    <div className="about-container">
      <div className="about-container-text">
        <p className="about-title">About Us</p>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
          aliquet tortor ut sit sit. Velit imperdiet integer elementum a
          scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat at
          interdum in. Venenatis arcu semper lectus quis sit in rhoncus auctor.
        </p>
        <div className="about-container-data">
          <div className="about-data-element">
            <p>150</p>
            <div></div>
            <div></div>
            <p>Vehicle In Stock</p>
          </div>
          <div className="about-data-element">
            <p>40</p>
            <div></div>
            <div></div>
            <p>Sold Car</p>
          </div>
          <div className="about-data-element">
            <p>38</p>
            <div></div>
            <div></div>
            <p>Local Branches </p>
          </div>
          <div className="about-data-element">
            <p>5</p>
            <div></div>
            <div></div>
            <p>Awards</p>
          </div>
        </div>
      </div>
      <div className="about-container-img">
        <img
          style={{
            objectFit: "cover",
            position: "relative",
            height: "75%",
            width: "90%",
            top: "53%",
            left: "0%",
            transform: "translateY(-50%)",
          }}
          src={aboutImg}
          alt="About Us"
        />
      </div>
    </div>
  );
}

export default About;
