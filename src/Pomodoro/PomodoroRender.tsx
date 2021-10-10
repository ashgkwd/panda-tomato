import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import React from "react";
import Display from "../Countdown/Display";
import { Pomodorable } from "../types/Pomodorable";
import ActionButton from "./ActionButton";
import "./styles.css";

function PomodoroRender({ onToggle, isPaused, minutes, seconds }: Pomodorable) {
  return (
    <div className="pt-pomodoro">
      <ActionButton
        placement="top"
        tip="Spacebar"
        visibility={!isPaused}
        onClick={onToggle}
        icon={<PauseCircleOutlined />}
        className="pt-pomodoro-pause"
        label="Pause"
      />
      <Display minutes={minutes} seconds={seconds} />
      <ActionButton
        placement="bottom"
        tip="Spacebar"
        visibility={isPaused}
        onClick={onToggle}
        icon={<PlayCircleOutlined />}
        className="pt-pomodoro-start"
        label="Start"
      />
    </div>
  );
}

export default PomodoroRender;
