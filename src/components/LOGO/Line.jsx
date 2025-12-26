import React from "react";

function Line() {
  return (
    <div>
      <svg
        width="1250"
        height="1"
        viewBox="0 0 1250 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="698"
          y1="0.5"
          x2="1250"
          y2="0.499939"
          stroke="url(#paint0_radial_4221_1128)"
        />
        <line
          y1="-0.5"
          x2="698"
          y2="-0.5"
          transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 698 1)"
          stroke="url(#paint1_radial_4221_1128)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_4221_1128"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(698 0.0162494 -11.2189 1.89338e+06 698 1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#414141ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_4221_1128"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(698 0.0163104 -11.3844 1.89338e+06 0 0)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4C4C4" />
            <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Line;
