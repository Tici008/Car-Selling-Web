import React from "react";
import "./CarCard.css";
import Calendar from "../LOGO/HOME/Calendar";
import Drive from "../LOGO/HOME/Drive";
import Fuel from "../LOGO/HOME/Fuel";
import People from "../LOGO/HOME/People";
import StarEmpty from "../LOGO/HOME/StarEmpty";
import StarFull from "../LOGO/HOME/StarFull";
import { Link } from "react-router";
import HeartButton from "../LOGO/Profile/HeartButton/HeartButton.jsx";
import axiosModel from "../../api/axiosConfig.js";
import { useState, useEffect } from "react";

function CarCard({
  cId,
  cImg,
  cTitle,
  cPrice,
  cLocation,
  cTime,
  cDrive,
  cFuel,
  cPeople,
  cReview,
  cUpdate,
  onUpdate,
  cLiked,
  onRemoveCar,
}) {
  const [liked, setLiked] = useState(cLiked);
  useEffect(() => {
    setLiked(cLiked);
  }, [cLiked]);

  //like handle
  const handleAddFavorite = async () => {
    try {
      const id = cId;
      const response = await axiosModel.post(`/favorite-cars/${id}`);
      console.log(response);
      setLiked(true);
    } catch (err) {
      console.error("Error updating like status:", err);
    }
  };

  //unlike handle
  const handleDeleteFavorite = async () => {
    try {
      const id = cId;
      const response = await axiosModel.delete(`/favorite-cars/${id}`);
      console.log(response);
      setLiked(false);
      onRemoveCar(id);
    } catch (err) {
      console.error("Error updating like status:", err);
    }
  };
  return (
    <div className="carCard-container">
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
          src={cImg}
          alt="noimg"
        />
      </div>
      {/* content */}
      <div className="carCard-content-container">
        <div className="carCard-content-tag">New</div>
        <Link to={`/car-detail/${cId}`} className="link-style">
          <div className="carCard-content-title">
            <p>{cTitle}</p>
          </div>
        </Link>

        <div className="carCard-content-price">
          <h2>${cPrice}</h2>
        </div>
        <div className="carCard-content-location">
          <p>{cLocation}</p>
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
              <p>{cTime}</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <Drive />
              <p>{cDrive}</p>
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
              <p>{cFuel}</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <People />
              <p>{cPeople}</p>
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
            marginLeft: "40px",
            fontFamily: "Lato, sans-serif",
            fontWeight: "700",
            lineHeight: "100%",
            fontStyle: "normal",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "white",
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
            <p>{cReview} review</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {cUpdate ? (
            <button
              className="update-button"
              onClick={() => onUpdate({ cTitle, cId })}
            >
              Update
            </button>
          ) : (
            <></>
          )}
        </div>
        {liked ? (
          <div className="heart-button">
            <HeartButton onUnlike={handleDeleteFavorite} onLiked={liked} />
          </div>
        ) : (
          <div className="heart-button">
            <HeartButton onLike={handleAddFavorite} onLiked={liked} />
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
}

export default CarCard;
