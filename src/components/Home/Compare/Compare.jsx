import React from "react";
import "./Compare.css";
import CompareCard from "./CompareCard/CompareCard";
import carImg1 from "../../img/HOME img/Red.png";
import carImg2 from "../../img/HOME img/Black.png";

function Compare() {
  return (
    <div className="compare-container">
      <div className="compare-container-title">
        <p>Compare Cars</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CompareCard
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

        <div
          style={{
            fontFamily: "Lato, san-serif",
            fontWeight: "700",
            fontStyle: "normal",
            fontSize: "36px",
            backgroundColor: "#4DA8DA",
            borderRadius: "50%",
            width: "120px",
            height: "120px",
            position: "relative",
          }}
        >
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "100",
            }}
          >
            VS
          </p>
        </div>
        <CompareCard
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
      </div>
      <div>
        <button
          style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 30px",
            backgroundColor: "#0B0C10",
            color: "white",
            border: "1px solid white",
            borderRadius: "3px",
            marginTop: "30px",
            width: "600px",
            cursor: "pointer",
            height: "50px",
            fontFamily: "Lato, sans-serif",
            fontWeight: "600",
            fontStyle: "normal",
            fontSize: "15px",
          }}
        >
          Compare Car
        </button>
      </div>
    </div>
  );
}

export default Compare;
