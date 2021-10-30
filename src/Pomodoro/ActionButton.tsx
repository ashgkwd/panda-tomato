import { Button, Tooltip } from "antd";
import { Actionable } from "../types/Actionable";

function ActionButton({
  visibility,
  onClick,
  label,
  icon,
  placement,
  className,
  tip = "Spacebar",
  type = "primary",
}: Actionable) {
  return (
    <Tooltip
      title={tip}
      placement={placement}
      className={`pt-visible-${visibility}`}
    >
      <Button
        size="large"
        ghost={true}
        type={type}
        onClick={onClick}
        icon={icon}
        className={className}
      >
        {label}
      </Button>
    </Tooltip>
  );
}

export default ActionButton;
