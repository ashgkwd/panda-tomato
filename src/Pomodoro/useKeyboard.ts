import { Dispatch, useEffect } from "react";
import { Reset, Toggle } from "../types/Clockable";

function useKeyboard(
  isPaused: boolean,
  setIsPaused: Dispatch<boolean>,
  toggle: Toggle,
  reset: Reset
) {
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
}

export default useKeyboard;
