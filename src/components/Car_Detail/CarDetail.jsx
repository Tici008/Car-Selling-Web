import React, { useEffect, useState } from "react";
import "./CarDetail.css";
import Header2 from "../Header_2/Header2.jsx";
import CarDetailContent from "./Content/CarDetailContent.jsx";
import { useParams } from "react-router";
import axiosModel from "../../api/axiosConfig.js";

function CarDetail() {
  const [cars, setCars] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosModel.get(`/cars/${id}`);
      console.log(response);
      setCars(response.data.car);
    };
    fetchData();
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
