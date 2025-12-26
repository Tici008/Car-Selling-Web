import React from "react";
import "./Recommend.css";
import OpenTag from "../../LOGO/HOME/OpenTag";
import SmallCard from "../../Small Card/SmallCard";
import carImg1 from "../../img/HOME img/Red.png";
import carImg2 from "../../img/HOME img/Black.png";
import carImg3 from "../../../../public/img/CARDETAIl img/Acura/acura1.jpg";
function Recommend() {
  return (
    <div className="recommend-container">
      {/* recommended nav*/}
      <div>
        <h1
          style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          Recommended Cars
        </h1>
        <div className="recommend-nav">
          <div>
            <div className="recommend-menu">New</div>
            <div className="recommend-line"></div>
          </div>
          <div className="recommend-menu">Used</div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            position: "absolute",
            color: "#007CC7",
            fontFamily: "Lato, sans-serif",
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: "14px",
            right: "0",
            top: "53px",
            cursor: "pointer",
          }}
        >
          <div>See More</div>
          <div style={{ position: "relative", top: "2px" }}>
            <OpenTag />
          </div>
        </div>
      </div>

      {/* recommended cards */}
      <div className="recommended-card-container">
        <SmallCard
          carImg={carImg1}
          carTitle="Tesla Model 3 Standard Range 
Plus"
          carPrice="$56,690"
          carLocation="Florida, USA"
          carTime="2020"
          carDrive="Rear-Wheel Drive"
          carFuel="Electric"
          carPeople="5"
          carReview="12"
        />
        <SmallCard
          carImg={carImg2}
          carTitle="Ford F-250 Super Duty"
          carPrice="$82,098"
          carLocation="Austin, TX"
          carTime="2021"
          carDrive="Four-Wheel Drive"
          carFuel="Diesel"
          carPeople="5"
          carReview="24"
        />
        <SmallCard
          carImg={carImg3}
          carTitle="Acura RDX Technology Package With Navigation & AWD"
          carPrice="$50,349"
          carLocation="San Francisco, CA"
          carTime="2026"
          carDrive="Four-Wheel Drive"
          carFuel="Gasoline"
          carPeople="6"
          carReview="18"
        />
      </div>
    </div>
  );
}

export default Recommend;
