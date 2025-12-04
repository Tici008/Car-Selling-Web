import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner";
import Filter from "./Filter Area/Filter";
import Recommend from "./Recommended/Recommend";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <Filter
        filterOpacity1={"100%"}
        filterOpacity2={"50%"}
        filterOpacity3={"50%"}
      />
      <Recommend />
    </div>
  );
}

export default Home;
