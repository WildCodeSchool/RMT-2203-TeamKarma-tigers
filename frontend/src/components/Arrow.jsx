import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/arrow.css";

function Arrow() {
  return (
    <div className="container">
      <AnchorLink href="#stuff">
        <h1>Click me if you want to see the trending Movies of this week !</h1>
      </AnchorLink>
    </div>
  );
}

export default Arrow;
