import PomodoroRender from "./PomodoroRender";
import useClockable from "./useClockable";

function PomodoroHOC() {
  const [{ minutes, seconds, isPaused }, toggle] = useClockable(25, 0);

  return (
    <PomodoroRender
      minutes={minutes}
      seconds={seconds}
      onToggle={toggle}
      isPaused={isPaused}
    />
  );
}

export default PomodoroHOC;
