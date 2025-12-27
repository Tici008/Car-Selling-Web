import React, { useEffect, useState } from "react";
import "./CarDetail.css";
import Header2 from "../Header 2/Header2";
import CarDetailContent from "./Content/CarDetailContent.jsx";
import { useParams } from "react-router";

function CarDetail() {
  const [cars, setCars] = useState([]);
  const { id } = useParams();
  const apiUrl = "http://localhost:3000/cars";
  useEffect(() => {
    fetch(`${apiUrl}/${id}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [id]);
  return (
    <>
      {/* Image */}
      <div className="carDetail-img-container">
        <Header2 title2={cars.name} />
        <div className="carDetail-Img">
          <img src={cars.img1} alt="" />
        </div>
        <div className="carDetail-des-image">
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={cars.img1} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={cars.img2} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={cars.img3} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={cars.img4} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={cars.img5} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={cars.img6} alt="" />
          </div>
          <div className="carDetail-imgContainer-css">
            <img className="carDetail-img-css" src={cars.img7} alt="" />
          </div>
        </div>
      </div>
      {/* main part */}
      <div className="carDetail-content-container">
        <CarDetailContent carData={cars} />
      </div>
    </>
  );
}

export default CarDetail;
