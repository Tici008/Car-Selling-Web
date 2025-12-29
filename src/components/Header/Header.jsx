import React from "react";
import "./Header.css";
import logoImg from "../img/cbd16f02ecd93bbc4d7b2ad92d273e350353d94e.png";
import Vector from "../LOGO/Vector";
import SignUp from "../LOGO/SignUp";
import { Link } from "react-router";
function Header({ user, onLogout }) {
  return (
    <header className="header-container">
      <Link className="link-style" to={""}>
        <div className="header-logo-container">
          <img
            style={{ width: "117.63px", height: "32px" }}
            src={logoImg}
            alt=""
          />
        </div>
      </Link>

      <div className="header-link-container">
        <Link className="link-style " to={"/car-list"}>
          <div className="header-element">All Cars</div>
        </Link>

        <div className="header-element">Compare</div>
        <div className="header-element">Sell</div>
        <div className="header-element-article">
          <div className="header-element">Article</div>
          <Vector />
        </div>
      </div>
      <div className="header-sign-container">
        {user ? (
          <div className="header-sign" style={{ gap: "15px" }}>
            <span style={{ fontWeight: "bold", color: "#1890ff" }}>
              Hello, {user?.username || user?.email || "Guest"}
            </span>
            <span
              className="header-element"
              style={{ cursor: "pointer" }}
              onClick={onLogout}
            >
              Logout
            </span>
          </div>
        ) : (
          <>
            <div className="header-sign">
              <div
                style={{
                  transform: "translateY(2px)",
                }}
              >
                <SignUp />
              </div>
              <Link className="link-style header-element" to={"/car-signUp"}>
                Sign up
              </Link>
            </div>
            <Link className="link-style header-element" to={"/car-signIn"}>
              Sign in
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
