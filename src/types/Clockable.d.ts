import { Displayable } from "./Displayable";

export type Clockable = Displayable & {
  isOver: boolean;
  isPaused: boolean;
};
