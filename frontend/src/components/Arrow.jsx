import React from "react";
import "../styles/arrow.css";

function Arrow() {
  return (
    <div className="things">
      <div className="content">
        <div className="arrow">
          <div className="curve" />
          <div className="point" />
        </div>
      </div>
      <div className="content">
        <h1>...or, you may want to see the trending Movies of this week ?</h1>
      </div>
    </div>
  );
}

export default Arrow;
