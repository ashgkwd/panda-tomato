import { Displayable } from "./Displayable";
import { Startable } from "./Startable";

export type Pomodorable = Startable &
  Displayable & {
    onReset: () => void;
  };
