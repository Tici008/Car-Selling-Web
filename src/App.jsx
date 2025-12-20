import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarDetail from "./components/Car Detail/CarDetail";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="car-detail" element={<CarDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
