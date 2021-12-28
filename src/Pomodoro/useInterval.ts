import { Dispatch, useEffect, useRef } from "react";
import { Reset } from "../types/Clockable";
import { remaining } from "./clockUtils";
import { tickSound } from "./tickSound";

function useInterval(
  isPaused: boolean,
  endsAt: Date,
  setRemaining: Dispatch<[number, number]>,
  reset: Reset,
  onFinish?: () => void
) {
  const interval = useRef<number | undefined>();

  useEffect(() => {
    if (isPaused) return;
    interval.current = window.setInterval(() => {
      const current = new Date();

      const [remainingMinutes, remainingSeconds] = remaining(current, endsAt);

      const areLastThreeSeconds =
        0 < remainingSeconds && remainingSeconds <= 3 && remainingMinutes <= 0;
      if (areLastThreeSeconds) tickSound();

      const isFinished = remainingMinutes <= 0 && remainingSeconds <= 0;
      if (isFinished) return onFinish ? onFinish() : reset();

      setRemaining([remainingMinutes, remainingSeconds]);
    }, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused, endsAt, setRemaining, onFinish, reset]);
}

export default useInterval;
