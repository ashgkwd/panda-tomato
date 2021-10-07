import { Button } from "antd";
import React from "react";
import Display from "../Countdown/Display";
import { Pomodorable } from "../types/Pomodorable";
import "./styles.css";

function PomodoroRender({ onToggle, isPaused, minutes, seconds }: Pomodorable) {
  return (
    <div className="pt-pomodoro">
      <Button
        className={`pt-is-paused-${isPaused} pt-pomodoro-pause`}
        onClick={onToggle}
      >
        Pause
      </Button>
      <Display minutes={minutes} seconds={seconds} />
      <Button
        className={`pt-is-paused-${isPaused} pt-pomodoro-start`}
        onClick={onToggle}
      >
        Start
      </Button>
    </div>
  );
}

export default PomodoroRender;
