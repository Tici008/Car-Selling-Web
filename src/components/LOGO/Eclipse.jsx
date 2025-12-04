import React from "react";

function Eclipse({ opacityScale }) {
  return (
    <div>
      <svg
        width="13"
        height="13"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="8"
          cy="8"
          r="8"
          fill="#007CC7"
          style={{ opacity: opacityScale }}
        />
      </svg>
    </div>
  );
}

export default Eclipse;
