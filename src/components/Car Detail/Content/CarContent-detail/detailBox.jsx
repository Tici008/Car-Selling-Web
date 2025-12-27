import React from "react";
import "./detailBox.css";

// Dictionary

const GeneralInfo = ({
  brand,
  model,
  condition,
  year,
  bodyType,
  seats,
  exteriorColor,
}) => (
  <div className="detailBox-container">
    <p className="detailBox-title">Car details</p>
    <div className="detailBox-prop-container">
      <div className="detailBox-left">
        <p>Brand</p>
        <p>Model</p>
        <p>Condition</p>
        <p>Year</p>
        <p>Body Type</p>
        <p>Seats</p>
        <p>Exterior Color</p>
      </div>
      <div className="detailBox-right">
        <p>{brand}</p>
        <p>{model}</p>
        <p>{condition}</p>
        <p>{year}</p>
        <p>{bodyType}</p>
        <p>{seats}</p>
        <p>{exteriorColor}</p>
      </div>
    </div>
    <div className="detailBox-line"></div>
  </div>
);
const EngineInfo = ({ fuelType, mileage, transmission, driveTrain, power }) => (
  <div className="detailBox-container">
    <p className="detailBox-title">Engine</p>
    <div className="detailBox-prop-container">
      <div className="detailBox-left">
        <p>Fuel Type</p>
        <p>Mileage</p>
        <p>Transmission</p>
        <p>Drivetrain</p>
        <p>Power</p>
      </div>
      <div className="detailBox-right">
        <p>{fuelType}</p>
        <p>{mileage}</p>
        <p>{transmission}</p>
        <p>{driveTrain}</p>
        <p>{power}</p>
      </div>
    </div>
    <div className="detailBox-line"></div>
  </div>
);
const BatteryInfo = ({
  batteryCapacity,
  chargeSpeed,
  chargePort,
  chargeTime,
}) => (
  <div className="detailBox-container">
    <p className="detailBox-title">Battery and Charging</p>
    <div className="detailBox-prop-container">
      <div className="detailBox-left">
        <p>Battery Capacity</p>
        <p>Charge Speed</p>
        <p>Charge Port</p>
        <p>Charge Time (0 to Full) </p>
      </div>
      <div className="detailBox-right">
        <p>{batteryCapacity}</p>
        <p>{chargeSpeed}</p>
        <p>{chargePort}</p>
        <p>{chargeTime}</p>
      </div>
    </div>
    <div className="detailBox-line"></div>
  </div>
);
const FuelInfo = ({
  engine,
  engineTorque,
  fuelTankCapacity,
  fuelConsumption,
}) => (
  <div className="detailBox-container">
    <p className="detailBox-title">Fuel and Engine </p>
    <div className="detailBox-prop-container">
      <div className="detailBox-left">
        <p>Engine</p>
        <p>Engine Torque</p>
        <p>Fuel Tank Capacity</p>
        <p>Fuel Consumption </p>
      </div>
      <div className="detailBox-right">
        <p>{engine}</p>
        <p>{engineTorque}</p>
        <p>{fuelTankCapacity}</p>
        <p>{fuelConsumption}</p>
      </div>
    </div>
    <div className="detailBox-line"></div>
  </div>
);
const Dimension = ({ length, width, height, cargoVolume }) => (
  <div className="detailBox-container">
    <p className="detailBox-title">Dimension</p>
    <div className="detailBox-prop-container">
      <div className="detailBox-left">
        <p>Length</p>
        <p>Width</p>
        <p>Height</p>
        <p>Cargo Volume </p>
      </div>
      <div className="detailBox-right">
        <p>{length}</p>
        <p>{width}</p>
        <p>{height}</p>
        <p>{cargoVolume}</p>
      </div>
    </div>
    <div className="detailBox-line"></div>
  </div>
);
const INFO_COMPONENT = {
  general: GeneralInfo,
  engine: EngineInfo,
  battery: BatteryInfo,
  dimension: Dimension,
  fuel: FuelInfo,
};

function DetailBox(props) {
  const SelectedContent = INFO_COMPONENT[props.in4Type];
  return (
    <>
      <SelectedContent {...props} />
    </>
  );
}

export default DetailBox;
