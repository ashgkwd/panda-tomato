import { Button, Tooltip } from "antd";
import React from "react";
import Display from "../Countdown/Display";
import { Pomodorable } from "../types/Pomodorable";
import "./styles.css";

function PomodoroRender({ onToggle, isPaused, minutes, seconds }: Pomodorable) {
  return (
    <div className="pt-pomodoro">
      <Tooltip
        placement="top"
        title="Spacebar"
        className={`pt-visible-${!isPaused}`}
      >
        <Button
          className={`pt-visible-${!isPaused} pt-pomodoro-pause`}
          onClick={onToggle}
        >
          Pause
        </Button>
      </Tooltip>
      <Display minutes={minutes} seconds={seconds} />
      <Tooltip
        placement="bottom"
        title="Spacebar"
        className={`pt-visible-${isPaused}`}
      >
        <Button
          size="large"
          className={`pt-visible-${isPaused} pt-pomodoro-start`}
          onClick={onToggle}
        >
          Start
        </Button>
      </Tooltip>
    </div>
  );
}

export default PomodoroRender;
