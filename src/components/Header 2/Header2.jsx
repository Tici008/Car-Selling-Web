import React from "react";
import "./Header2.css";

function Header2({ title2 }) {
  return (
    <div className="header2-container">
      <div className="header2-title">{title2}</div>
      <div>
        <p>Home - New Car List - Car Detail</p>
      </div>
    </div>
  );
}

export default Header2;
