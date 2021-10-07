import { useEffect, useRef, useState } from "react";
import { tickSound } from "./tickSound";

function useClockable(startMinutes: number, startSeconds: number) {
  const [clockSeconds, setClockSeconds] = useState(
    startMinutes * 60 + startSeconds
  );
  const [minutes, setMinutes] = useState(startMinutes);
  const [seconds, setSeconds] = useState(startSeconds);
  const [isPaused, setIsPaused] = useState(true);
  const interval = useRef<number | undefined>();

  function toggle(): void {
    setIsPaused(!isPaused);
  }

  useEffect(() => {
    const keyboardShortcutSpace = (ev: KeyboardEvent) => {
      if (ev.code === "Space") setIsPaused(!isPaused);
    };

    window.addEventListener("keypress", keyboardShortcutSpace, false);

    return () =>
      window.removeEventListener("keypress", keyboardShortcutSpace, false);
  }, [setIsPaused, isPaused]);

  useEffect(() => {
    if (isPaused) return;
    interval.current = window.setInterval(() => {
      const remaining = clockSeconds - 1;
      if (remaining <= 3 && remaining > 0) tickSound();
      if (remaining < 0) return;

      setClockSeconds(remaining);
      setSeconds(remaining % 60);
      setMinutes(Math.floor(remaining / 60));
    }, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused, clockSeconds]);

  return [{ minutes, seconds, isPaused }, toggle] as const;
}

export default useClockable;
