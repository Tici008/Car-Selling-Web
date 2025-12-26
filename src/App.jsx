import { Router, Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  return (
    <div>
      <SearchResult />
    </div>
  );
}

export default App;
