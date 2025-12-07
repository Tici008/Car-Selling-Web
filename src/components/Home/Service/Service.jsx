import React from "react";
import "./Service.css";
import NewCar from "../../LOGO/HOME/Service/NewCar.jsx";
import UsedCar from "../../LOGO/HOME/Service/UsedCar.jsx";

function Service() {
  return (
    <div className="service-container">
      <p>Our Service</p>
      <div className="service-container-click">
        <div className="service-click-element">
          <NewCar />
          Buy a new car
        </div>
        <div className="service-click-element">
          <UsedCar />
          Buy an used car
        </div>
      </div>
    </div>
  );
}

export default Service;
