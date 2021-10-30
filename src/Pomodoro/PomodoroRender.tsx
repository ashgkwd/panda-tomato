import { PauseCircleOutlined, RollbackOutlined } from "@ant-design/icons";
import { Space } from "antd";
import React from "react";
import Display from "../Countdown/Display";
import { Pomodorable } from "../types/Pomodorable";
import ActionButton from "./ActionButton";
import StartActions from "./StartActions";
import "./styles.css";

function PomodoroRender({
  onToggle,
  onWorkStart,
  onBreakStart,
  onReset,
  isPaused,
  isReset,
  minutes,
  seconds,
}: Pomodorable) {
  return (
    <Space direction="vertical" className="pt-screen">
      <div className="pt-action-bar">
        <ActionButton
          placement="bottom"
          tip="⌥R (Alt R)"
          visibility={true}
          onClick={onReset}
          icon={<RollbackOutlined />}
          className="pt-pomodoro-reset"
          label="Reset"
        />
      </div>
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
        <StartActions
          onToggle={onToggle}
          isReset={isReset}
          onWorkStart={onWorkStart}
          onBreakStart={onBreakStart}
          isPaused={isPaused}
        />
      </div>
    </Space>
  );
}

export default PomodoroRender;
