import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
