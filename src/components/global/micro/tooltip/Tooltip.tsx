"use client";
import { FC, ReactNode, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ content, position = "top", children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="group relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div
          className={`fixed z-50 min-w-max rounded-md bg-[#DADADC] px-3 py-2 text-xs font-light shadow-lg min-h-fit ${
            position === "top"
              ? "bottom-full left-1/2 mb-0 -translate-x-1/2"
              : position === "bottom"
              ? "left-1/2 top-full mt-2 -translate-x-1/2"
              : position === "left"
              ? "right-full top-1/2 mr-2 -translate-y-1/2"
              : "left-full top-1/2 ml-2 -translate-y-1/2"
          }`}
          style={{
            top: tooltipPosition.top-60,
            left: tooltipPosition.left+100,
          }}
        >
          {typeof content === "string" ? (
            <p>{content}</p>
          ) : (
            <div className="flex flex-col space-y-1">{content}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;