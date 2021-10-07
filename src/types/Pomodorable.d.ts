import { Displayable } from "./Displayable";

export type Pomodorable = Displayable & {
  actionLabel: string;
  onToggle: () => void;
};
