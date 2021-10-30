import { useCallback, useEffect, useRef, useState } from "react";
import { tickSound } from "./tickSound";

function initialClockSeconds(
  startMinutes: number,
  startSeconds: number
): number {
  return startMinutes * 60 + startSeconds;
}

function useClockable(
  startMinutes: number,
  startSeconds: number,
  onFinish?: () => void
) {
  const [clockSeconds, setClockSeconds] = useState(
    initialClockSeconds(startMinutes, startSeconds)
  );
  const [minutes, setMinutes] = useState(startMinutes);
  const [seconds, setSeconds] = useState(startSeconds);
  const [isPaused, setIsPaused] = useState(true);
  const [isReset, setIsReset] = useState(true);
  const interval = useRef<number | undefined>();

  const toggle = useCallback((): void => {
    setIsPaused(!isPaused);
    setIsReset(false);
  }, [isPaused]);

  const reset = useCallback(
    (minutes = startMinutes, seconds = startSeconds): void => {
      setIsReset(true);
      setIsPaused(true);
      setMinutes(minutes);
      setSeconds(seconds);
      setClockSeconds(initialClockSeconds(minutes, seconds));
    },
    [startMinutes, startSeconds]
  );

  function startWork() {
    reset(25, 0);
    toggle();
  }

  function startBreak() {
    reset(5, 0);
    toggle();
  }

  useEffect(() => {
    const keyboardShortcutSpace = (ev: KeyboardEvent) => {
      if (ev.code === "Space") toggle();
    };

    const keyboardShortcutOptionR = (ev: KeyboardEvent) => {
      if (ev.code === "KeyR" && ev.altKey) reset();
    };

    window.addEventListener("keypress", keyboardShortcutSpace, false);
    window.addEventListener("keyup", keyboardShortcutOptionR, false);

    return () => {
      window.removeEventListener("keypress", keyboardShortcutSpace, false);
      window.removeEventListener("keyup", keyboardShortcutOptionR, false);
    };
  }, [setIsPaused, isPaused, reset, toggle]);

  useEffect(() => {
    if (isPaused) return;
    interval.current = window.setInterval(() => {
      const remaining = clockSeconds - 1;
      if (remaining <= 3 && remaining > 0) tickSound();
      if (remaining < 0) return onFinish ? onFinish() : reset();

      setClockSeconds(remaining);
      setSeconds(remaining % 60);
      setMinutes(Math.floor(remaining / 60));
    }, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused, clockSeconds, onFinish, reset]);

  return [
    { minutes, seconds, isPaused, isReset },
    { toggle, reset: () => reset(), startWork, startBreak },
  ] as const;
}

export default useClockable;
