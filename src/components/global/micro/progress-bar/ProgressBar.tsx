import React, { FC } from "react";

interface ProgressBarProps {
  completed: number;
  bgColor: string;
  baseBgColor?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({
  completed,
  bgColor,
  baseBgColor = "#E5E7EB",
}) => {
  return (
    <div
      className="h-3 w-full rounded-full"
      style={{ backgroundColor: baseBgColor }}
      aria-label={`Progress: ${completed}%`}
    >
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{ width: `${completed}%`, backgroundColor: bgColor }}
      />
    </div>
  );
};

export default ProgressBar;
