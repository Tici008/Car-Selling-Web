import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarDetail from "./components/Car Detail/CarDetail";
import { Route, Routes } from "react-router";
import SearchResult from "./components/SearchResult/SearchResult";
import CarCardLong from "./components/CarCard/CarCardLong";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="car-detail/:id" element={<CarDetail />} />
          <Route path="car-list" element={<CarCardLong />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
