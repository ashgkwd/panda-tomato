export type Startable = {
  isPaused: boolean;
  isReset: boolean;
  onToggle: () => void;
  onWorkStart: () => void;
  onBreakStart: () => void;
};
