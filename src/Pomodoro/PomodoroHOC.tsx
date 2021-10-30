import PomodoroRender from "./PomodoroRender";
import useClockable from "./useClockable";

function PomodoroHOC() {
  const [
    { minutes, seconds, isPaused, isReset },
    { toggle, reset, startWork, startBreak },
  ] = useClockable(25, 0);

  return (
    <PomodoroRender
      onReset={reset}
      minutes={minutes}
      seconds={seconds}
      onToggle={toggle}
      isPaused={isPaused}
      isReset={isReset}
      onWorkStart={startWork}
      onBreakStart={startBreak}
    />
  );
}

export default PomodoroHOC;
