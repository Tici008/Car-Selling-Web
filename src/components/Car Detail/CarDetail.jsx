import React from "react";
import "./CarDetail.css";
import Header2 from "../Header 2/Header2";
import IMG from "../img/HOME img/Red.png";
import IMG2 from "../img/CARDETAIL img/2nd.png";
import IMG3 from "../img/CARDETAIL img/3rd.png";
import IMG4 from "../img/CARDETAIL img/4th.png";
import IMG5 from "../img/CARDETAIL img/5th.png";
import IMG6 from "../img/CARDETAIL img/6th.png";
import IMG7 from "../img/CARDETAIL img/7th.png";
import CarDetailContent from "./Content/CarDetailContent.jsx";

function CarDetail() {
  return (
    <>
      {/* Image */}
      <div className="carDetail-img-container">
        <Header2 title2={"Tesla Model 3 Standard Range Plus"} />
        <div className="carDetail-Img">
          <img src={IMG} alt="" />
        </div>
        <div className="carDetail-des-image">
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG2} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG3} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG4} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG5} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG6} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={IMG7} alt="" />
          </div>
        </div>
      </div>
      {/* main part */}
      <div className="carDetail-content-container">
        <CarDetailContent />
      </div>
    </>
  );
}

export default CarDetail;
