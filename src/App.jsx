import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarDetail from "./components/Car Detail/CarDetail";
import { Route, Routes } from "react-router";
import SearchResult from "./components/SearchResult/SearchResult";
import SignInForm from "./components/Sign up - in/Sign in/SignIn";
import SignUpForm from "./components/Sign up - in/Sign up/SignUp";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const handleId = (id) => {
    setUserId(id);
  };
  const handleLogIn = (userData) => {
    setUser(userData);
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <>
      <div className="app-container">
        <Header user={user} userId={userId} onLogout={handleLogOut} />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="car-detail/:id" element={<CarDetail />} />
          <Route path="car-list" element={<SearchResult />} />
          <Route
            path="car-signIn"
            element={<SignInForm onLoginSuccess={handleLogIn} />}
          ></Route>
          <Route
            path="car-signUp"
            element={<SignUpForm onHandleId={handleId} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
