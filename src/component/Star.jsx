import { useState } from "react";

function Star() {
  const StarStyle = {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "40px",
    transition: "0.2s",
    marginBottom: "20px",
  };
  const StarColor = {
    on: "#edbf7a",
    off: " #f0f0f0",
  };

  const [starRate, setStarRate] = useState(0);
  const [starHover, setStarHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return (
          <button
            type="button"
            key={index}
            style={{
              ...StarStyle,
              color:
                index + 1 <= (starHover || starRate)
                  ? StarColor.on
                  : StarColor.off,
            }}
            onClick={() => {
              setStarRate(index + 1);
            }}
            onMouseEnter={() => setStarHover(index + 1)}
            onMouseLeave={() => {
              setStarHover(starRate);
            }}
          >
            <span>★</span>
          </button>
        );
      })}
    </div>
  );
}

export default Star;
