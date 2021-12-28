import { Displayable } from "./Displayable";

export type Clockable = Displayable & {
  isOver: boolean;
  isPaused: boolean;
};

export type Reset = (minutes?: number, seconds?: number) => void;

export type Toggle = () => void;
