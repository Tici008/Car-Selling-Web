import React from "react";
import "./CompareCard.css";
import Ribbon1 from "../../../LOGO/HOME/Ribbon1";
import Ribbon2 from "../../../LOGO/HOME/Ribbon2";
import Calendar from "../../../LOGO/HOME/Calendar";
import Drive from "../../../LOGO/HOME/Drive";
import Fuel from "../../../LOGO/HOME/Fuel";
import People from "../../../LOGO/HOME/People";
import StarEmpty from "../../../LOGO/HOME/StarEmpty";
import StarFull from "../../../LOGO/HOME/StarFull";
function CompareCard({
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
    <div className="card-container-compare">
      {/* car image */}
      <div
        style={{
          margin: "16px",
          width: "369px",
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
      <div className="card-content-container-compare">
        <div className="card-content-tag-compare">New</div>
        <div className="card-content-title-compare">
          <p>{carTitle}</p>
        </div>
        <div className="card-content-price-compare">
          <h2>{carPrice}</h2>
        </div>
        <div className="card-content-location-compare">
          <p>{carLocation}</p>
        </div>
        <div className="card-content-detail-compare">
          <div className="card-content-detail-item-compare">
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

          <div className="card-content-detail-item-compare">
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

export default CompareCard;
