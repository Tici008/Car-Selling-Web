import React from "react";
import "./Brand.css";
import brand1 from "../../img/HOME img/Brands/Audi.png";
import brand2 from "../../img/HOME img/Brands/Fiat.png";
import brand3 from "../../img/HOME img/Brands/Hyundai.png";
import brand4 from "../../img/HOME img/Brands/Peugeot.png";
import brand5 from "../../img/HOME img/Brands/Tesla.png";
import brand6 from "../../img/HOME img/Brands/Volvo.png";

function Brand() {
  return (
    <div className="home-brand-container">
      <img src={brand1} alt="" />

      <img src={brand2} alt="" />

      <img src={brand3} alt="" />

      <img src={brand4} alt="" />

      <img src={brand5} alt="" />

      <img src={brand6} alt="" />
    </div>
  );
}

export default Brand;
