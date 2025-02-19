import { FC, ReactNode } from "react";

interface TooltipProps {
  content: ReactNode; // Accepts string or JSX
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = ({ content, position = "top", children }) => {
  return (
    <div className="group relative flex items-center">
      {children}
      <div
        className={`absolute z-50 w-max max-w-xs rounded-md bg-[#DADADC] px-3 py-2 text-xs font-light opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 ${
          position === "top"
            ? "bottom-full left-1/2 mb-0 -translate-x-1/2"
            : position === "bottom"
              ? "left-1/2 top-full mt-2 -translate-x-1/2"
              : position === "left"
                ? "right-full top-1/2 mr-2 -translate-y-1/2"
                : "left-full top-1/2 ml-2 -translate-y-1/2"
        } `}
      >
        {typeof content === "string" ? (
          <p>{content}</p>
        ) : (
          <div className="flex flex-col space-y-1">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
