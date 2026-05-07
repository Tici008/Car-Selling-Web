import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarDetail from "./components/Car Detail/CarDetail";
import { Route, Routes } from "react-router";
import SearchResult from "./components/SearchResult/SearchResult";
import SignInForm from "./components/Sign up - in/Sign in/SignIn";
import SignUpForm from "./components/Sign up - in/Sign up/SignUp";
import { useState, useEffect } from "react";
import InformationCreating from "./components/Sign up - in/in4Creating/InformationCreating.jsx";
import { getTokenData } from "./utils/auth.js";
import CarCollection from "./components/Seller/CarCollection.jsx";
import SellingCars from "./components/Seller/SellingCars.jsx";
import ProfileInfo from "./components/Profile/ProfileInfo.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [Signed, setSignedIn] = useState(null);
  const [role, setRole] = useState(null);
  const handleUser = (state) => {
    setUser(state);
  };
  const handleLogIn = () => {
    setSignedIn(true);
    const tokenData = getTokenData();
    setRole(tokenData.role);
  };
  const handleLogOut = () => {
    setSignedIn(null);
    setRole(null);
  };

  return (
    <>
      <div className="app-container">
        <Header
          role={role}
          user={user}
          signed={Signed}
          onLogout={handleLogOut}
        />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="car-detail/:id" element={<CarDetail />} />
          <Route path="car-list" element={<SearchResult />} />
          <Route
            path="car-signIn"
            element={
              <SignInForm onUser={handleUser} onLoginSuccess={handleLogIn} />
            }
          ></Route>
          <Route path="car-selling" element={<SellingCars />}></Route>
          <Route path="car-collection" element={<CarCollection />}></Route>
          <Route path="car-signUp" element={<SignUpForm />}></Route>
          <Route
            path="information-creating"
            element={<InformationCreating onCreatingSuccess={handleUser} />}
          />
          <Route path="profile" element={<ProfileInfo />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
