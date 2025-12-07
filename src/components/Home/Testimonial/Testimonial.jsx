import React from "react";
import "./Testimonial.css";
import testimonialImg from "../../img/HOME img//Testimonial/CustomerReview.jpg";

function Testimonial() {
  return (
    <div className="testimonial-container">
      <p
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "700",
          fontStyle: "normal",
          fontSize: "24px",
          marginLeft: "147px",
          color: "white",
          marginBottom: "35px",
        }}
      >
        Testimonial
      </p>
      <div className="testimonial-container-content">
        <div className="testimonial-container-element">
          <div className="testimonial-container-img">
            <img src={testimonialImg} alt="" />
          </div>

          <div className="testimonial-element-text">
            <p> Ngoc Quang TC</p>
            <p> Customer</p>
            <p>
              {" "}
              Buying my car through this platform was surprisingly smooth and
              straightforward. The search tools made comparing options
              effortless and clear. Every detail, from vehicle history to
              pricing, felt transparent and trustworthy. I appreciated how
              quickly the support team responded to my questions and guided me
              through the process. Overall, it’s a service I would confidently
              recommend to anyone looking for a reliable car-buying experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
