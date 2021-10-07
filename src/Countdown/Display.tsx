import React from "react";
import { Displayable } from "../types/Displayable";

function Display({ minutes, seconds }: Displayable) {
  return (
    <div className="pt-display">
      <span className="pt-minutes">{minutes}</span> :{" "}
      <span className="pt-seconds">{seconds}</span>
    </div>
  );
}

export default Display;
