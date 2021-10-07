import { Button } from "antd";
import React from "react";
import Display from "../Countdown/Display";
import { Pomodorable } from "../types/Pomodorable";

function PomodoroRender({
  onToggle,
  actionLabel,
  minutes,
  seconds,
}: Pomodorable) {
  return (
    <>
      <Button onClick={onToggle}>{actionLabel}</Button>
      <Display minutes={minutes} seconds={seconds} />
    </>
  );
}

export default PomodoroRender;
