import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarDetail from "./components/Car Detail/CarDetail";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        {/* <Home /> */}
        <CarDetail />
        <Footer />
      </div>
    </>
  );
}

export default App;
