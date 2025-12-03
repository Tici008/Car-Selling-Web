import React from "react";
import "./Header.css";
import logoImg from "../img/cbd16f02ecd93bbc4d7b2ad92d273e350353d94e.png";
import Vector from "../LOGO/Vector";
import SignUp from "../LOGO/SignUp";
function Header() {
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <img
          style={{ width: "117.63px", height: "32px" }}
          src={logoImg}
          alt=""
        />
      </div>
      <div className="header-link-container">
        <div className="header-element">New Cars</div>
        <div className="header-element">Used Cars</div>
        <div className="header-element">Compare</div>
        <div className="header-element">Sell</div>
        <div className="header-element-article">
          <div className="header-element">Article</div>
          <Vector />
        </div>
      </div>
      <div className="header-sign-container">
        <div className="header-sign">
          <div
            style={{
              transform: "translateY(2px)",
            }}
          >
            <SignUp />
          </div>
          <a className="header-element">Sign up</a>
        </div>
        <a className="header-element"> Sign in</a>
      </div>
    </header>
  );
}

export default Header;
