import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
