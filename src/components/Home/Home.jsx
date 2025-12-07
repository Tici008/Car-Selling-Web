import React from "react";
import "./Home.css";
import Banner from "./Banner/Banner";
import Filter from "./Filter Area/Filter";
import Recommend from "./Recommended/Recommend";
import Compare from "./Compare/Compare";
import News from "./News/News";
import About from "./About Us/About.jsx";
import Service from "./Service/Service.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";
import Contact from "./Contact/Contact.jsx";
import Brand from "./Car Brand/Brand.jsx";

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
      <Compare />
      <News />
      <About />
      <Service />
      <Testimonial />
      <Contact />
      <Brand />
    </div>
  );
}

export default Home;
