import { Displayable } from "./Displayable";

export type Pomodorable = Displayable & {
  isPaused: boolean;
  onToggle: () => void;
};
