import { PlayCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Startable } from "../types/Startable";
import ActionButton from "./ActionButton";

function StartActions({
  isReset,
  isPaused,
  onToggle,
  onWorkStart,
  onBreakStart,
}: Startable) {
  return (
    <div className="pt-start-actions">
      <ActionButton
        placement="bottom"
        tip="Spacebar"
        visibility={isReset}
        onClick={onWorkStart}
        icon={<PlayCircleOutlined />}
        className="pt-pomodoro-start"
        label="Start Work"
      />
      <ActionButton
        placement="bottom"
        tip="⬆Spacebar (Shift Spacebar)"
        visibility={isReset}
        onClick={onBreakStart}
        icon={<PlayCircleOutlined />}
        className="pt-pomodoro-start"
        label="Start Break"
        type="text"
      />
      <ActionButton
        placement="bottom"
        tip="Spacebar"
        visibility={isPaused && !isReset}
        onClick={onToggle}
        icon={<PlayCircleOutlined />}
        className="pt-pomodoro-start"
        label="Start"
      />
    </div>
  );
}

export default StartActions;
