export type Actionable = {
  visibility: boolean | string;
  onClick: (Event?) => void;
  label: string;
  icon: any;
  placement: "bottom" | "top";
  tip: string;
  className: string | undefined;
};
