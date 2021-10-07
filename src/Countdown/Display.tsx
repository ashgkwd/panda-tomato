import React from "react";
import { Displayable } from "../types/Displayable";
import "./styles.css";

function Display({ minutes, seconds }: Displayable) {
  return (
    <div className="pt-display">
      <span className="pt-minutes">{minutes}</span> :{" "}
      <span className="pt-seconds">{String(seconds).padStart(2, "0")}</span>
    </div>
  );
}

export default Display;
