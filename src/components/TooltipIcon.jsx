import React from "react";

const TooltipIcon = ({ iconSrc, label }) => {
  return (
    <div className="relative group">
      {/* Icon */}
      <img
        src={iconSrc}
        alt={label}
        className="w-6 h-6 cursor-pointer"
      />

      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs px-2 py-1 rounded shadow z-50 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

export default TooltipIcon;