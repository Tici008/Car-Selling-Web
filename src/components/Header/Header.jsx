import React from "react";
import "./Header.css";
import logoImg from "../img/cbd16f02ecd93bbc4d7b2ad92d273e350353d94e.png";
import Vector from "../LOGO/Vector";
import SignUp from "../LOGO/SignUp";
import { Link } from "react-router";
import { Route, Routes } from "react-router";

//Admin
function AdminActions({ onLogout }) {
  return (
    <>
      <Link className="header-element123" to={"/car-selling"}></Link>
    </>
  );
}

//Customer
function CustomerActions({ onLogout }) {
  return (
    <>
      <Link className="link-style header-element" to={"/profile"}>
        Hello Customer
      </Link>
    </>
  );
}

//Seller
function SellerActions({ onLogout }) {
  return (
    <>
      <Link className="header-element123" to={"/car-selling"}>
        Selling Cars
      </Link>
      <Link className="header-element123" to={"/car-collection"}>
        Car Collection
      </Link>
      <button onClick={onLogout}>Log out</button>
      <Link className="link-style header-element" to={"/profile"}>
        Hello Seller
      </Link>
      <Link></Link>
    </>
  );
}

//No Signed
function NoSignedActions() {
  return (
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
  );
}

//No User
function NoUserActions({ onLogout }) {
  return (
    <div className="header-sign" style={{ gap: "15px" }}>
      <Link
        to="/information-creating"
        className="header-element create-info-link"
        style={{
          color: "white",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Create Personal Information
      </Link>

      <span
        className="header-element"
        style={{ cursor: "pointer" }}
        onClick={onLogout}
      >
        Logout
      </span>
    </div>
  );
}

//Header
function Header({ role, user, signed, onLogout }) {
  const renderActions = () => {
    if (!signed) {
      return <NoSignedActions />;
    } else if (signed) {
      if (!user) {
        return <NoUserActions onLogout={onLogout} />;
      } else {
        switch (role) {
          case "ADMIN":
            return <AdminActions onLogout={onLogout} />;
          case "SELLER":
            return <SellerActions onLogout={onLogout} />;
          case "CUSTOMER":
            return <CustomerActions onLogout={onLogout} />;
        }
      }
    }
  };

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
      <div className="header-sign-container">{renderActions()}</div>
    </header>
  );
}

export default Header;
