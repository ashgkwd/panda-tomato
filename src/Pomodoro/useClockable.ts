import { useCallback, useState } from "react";
import { Reset, Toggle } from "../types/Clockable";
import { inFuture, remaining } from "./clockUtils";
import useInterval from "./useInterval";
import useKeyboard from "./useKeyboard";

function useClockable(
  remainingMinutes: number,
  remainingSeconds: number,
  onFinish?: () => void
) {
  const [endsAt, setEndsAt] = useState(
    inFuture(remainingMinutes, remainingSeconds)
  );
  const [[minutes, seconds], setRemaining] = useState(
    remaining(new Date(), endsAt)
  );

  const [isPaused, setIsPaused] = useState(true);
  const [isReset, setIsReset] = useState(true);

  const toggle = useCallback<Toggle>(() => {
    setIsPaused(!isPaused);
    setIsReset(false);
  }, [isPaused]);

  const reset = useCallback<Reset>(
    (minutes = remainingMinutes, seconds = remainingSeconds) => {
      setIsReset(true);
      setIsPaused(true);

      setEndsAt(inFuture(minutes, seconds));
      setRemaining([minutes, seconds]);
    },
    [remainingMinutes, remainingSeconds]
  );

  const startWork = useCallback(() => {
    reset(25, 0);
    toggle();
  }, [reset, toggle]);

  const startBreak = useCallback(() => {
    reset(5, 0);
    toggle();
  }, [reset, toggle]);

  useKeyboard(isPaused, setIsPaused, toggle, reset);

  useInterval(isPaused, endsAt, setRemaining, reset, onFinish);

  return [
    { minutes, seconds, isPaused, isReset },
    { toggle, reset: () => reset(), startWork, startBreak },
  ] as const;
}

export default useClockable;
