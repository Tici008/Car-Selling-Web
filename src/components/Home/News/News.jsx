import React from "react";
import "./News.css";
import carImg12 from "../../img/HOME img/New/Road.jpg";
import carImg34 from "../../img/HOME img/New/Halfcar.jpg";

function News() {
  return (
    <div className="news-container">
      {/* nav bar */}
      <div className="news-nav">
        <div>
          <div className="news-menu">New</div>
          <div className="news-line"></div>
        </div>
        <div className="news-menu">Review</div>
      </div>

      {/* content bar*/}
      <div
        style={{
          position: "relative",
          width: "100%",
          bottom: "-100%",
          height: "425px",
          transform: "translateY(-100%)",
          backgroundColor: "#0B0C10",
          display: "flex",
          gap: "16px",
        }}
      >
        {/* left side */}
        <div
          style={{
            height: "100%",
            width: "454px",
            borderRadius: "3px",
            backgroundColor: "#12232E",
          }}
        >
          <div style={{ height: "50%", width: "100%" }}>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "3px",
              }}
              src={carImg12}
              alt=""
            />
          </div>
          <div className="new-text-container-leftSide">
            <p>Updating Collection</p>
            <p>
              {" "}
              Novel splendid sporty designs with refined, yet simple, details
              were arrived at our studio.{" "}
            </p>
            <div className="new-text-user">
              <i></i>
              <p>By NgocQuangTC</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "100%",
            width: "630px",
            gap: "16px",
          }}
        >
          <div
            style={{
              height: "50%",
              width: "100%",
              display: "flex",
              borderRadius: "3px",
              backgroundColor: "#12232E",
            }}
          >
            <div style={{ height: "100%", width: "40%", borderRadius: "3px" }}>
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={carImg34}
                alt=""
              />
            </div>
            <div className="new-text-container-rightSide">
              <p>Updating Website</p>
              <p>
                {" "}
                Cars Comparison may available in our website for better decision
                making.
              </p>
              <div>
                <i></i>
                <p>By NgocQuangTC</p>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "50%",
              width: "100%",
              backgroundColor: "#12232E",
              display: "flex",
              borderRadius: "3px",
            }}
          >
            <div style={{ height: "100%", width: "40%", borderRadius: "3px" }}>
              <img
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                src={carImg12}
                alt=""
              />
            </div>
            <div className="new-text-container-rightSide">
              <p>Updating Events</p>
              <p>
                {" "}
                Our 30-year anniversary is coming soon with various appealing
                offers and gifts.
              </p>
              <div>
                <i></i>
                <p>By NgocQuangTC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
