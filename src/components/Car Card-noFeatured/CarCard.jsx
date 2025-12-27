import React from "react";
import "./CarCard.css";
import Ribbon1 from "../LOGO/HOME/Ribbon1";
import Ribbon2 from "../LOGO/HOME/Ribbon2";
import Calendar from "../LOGO/HOME/Calendar";
import Drive from "../LOGO/HOME/Drive";
import Fuel from "../LOGO/HOME/Fuel";
import People from "../LOGO/HOME/People";
import StarEmpty from "../LOGO/HOME/StarEmpty";
import StarFull from "../LOGO/HOME/StarFull";
function CarCard({
  carImg,
  carTitle,
  carPrice,
  carLocation,
  carTime,
  carDrive,
  carFuel,
  carPeople,
  carReview,
}) {
  return (
    <div className="carCard-container">
      {/* ribbon */}
      <div style={{ position: "absolute", left: "94px" }}>
        <Ribbon1 />
      </div>
      <div style={{ position: "absolute", top: "94px" }}>
        <Ribbon1 />
      </div>
      <div style={{ position: "absolute" }}>
        <Ribbon2 />
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          fontFamily: "Lato, sans-serif",
          fontWeight: "700",
          fontStyle: "normal",
          fontSize: "17px",
          transform: " translateX(11px) rotate(-45deg) translateY(-7px)",
          top: "38.5px",
        }}
      >
        Featured
      </div>

      {/* car image */}
      <div
        style={{
          margin: "16px",
          width: "298px",
          height: "171.63px",
          borderRadius: "3px",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
          }}
          src={carImg}
          alt=""
        />
      </div>
      {/* content */}
      <div className="carCard-content-container">
        <div className="carCard-content-tag">New</div>
        <div className="carCard-content-title">
          <p>{carTitle}</p>
        </div>
        <div className="carCard-content-price">
          <h2>{carPrice}</h2>
        </div>
        <div className="carCard-content-location">
          <p>{carLocation}</p>
        </div>
        <div className="carCard-content-detail">
          <div className="carCard-content-detail-item">
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
                width: "76.75px",
              }}
            >
              <Calendar />
              <p>{carTime}</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <Drive />
              <p>{carDrive}</p>
            </div>
          </div>

          <div className="carCard-content-detail-item">
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <Fuel />
              <p>{carFuel}</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <People />
              <p>{carPeople}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#989898",
            height: "1px",
            width: "100%",
            marginTop: "10px",
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            fontFamily: "Lato, sans-serif",
            fontWeight: "700",
            lineHeight: "100%",
            fontStyle: "normal",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ display: "flex", gap: "0" }}>
            <StarFull />
            <StarFull />
            <StarFull />
            <StarFull />
            <StarEmpty />
          </div>
          <div>
            <p>{carReview} review</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
