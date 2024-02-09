import React from "react";
import "./Loading.scss"

const Loading = ({ numberOfDivs }) => {
  const divs = Array.from({ length: numberOfDivs }, (_, index) => index + 1);

  return (
    <div className="loading">
      <div className="grid-container">
        {divs.map((div, index) => (
          <div key={index} className="grid-item">
            {div}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
