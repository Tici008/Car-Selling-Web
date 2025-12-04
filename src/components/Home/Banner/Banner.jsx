import React from "react";
import "./Banner.css";
import bannerImg from "../../img/b14a2cfe2ae306192ca01d30521923f57d3f271f.jpg";
import Eclipse from "../../LOGO/Eclipse";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-layer"></div>
      <img src={bannerImg} />
      <div className="banner-text-container">
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Find your dream car
        </h1>
        <p style={{ fontSize: "24px", width: "400px", letterSpacing: "3%" }}>
          A collection brimming with the most top-tier brands in the world,
          where sophistication and majestic were granted.
        </p>
      </div>
      <div className="banner-nav">
        <Eclipse />
        <Eclipse opacityScale="50%" />
        <Eclipse opacityScale="50%" />
        <Eclipse opacityScale="50%" />
      </div>
    </div>
  );
}

export default Banner;
