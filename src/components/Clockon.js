import React from "react";
import ReactDOM from "react-dom";

import Stopwatch from "./Clock/Stopwatch";
import "./Clock/styles.css";

function Clockon() {
  return (
    <div className="Clockon">
      <Stopwatch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clockon />, rootElement);

export default Clockon;