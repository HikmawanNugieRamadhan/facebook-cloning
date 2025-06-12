import React from "react";

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded cursor-pointer">
    <img src={icon} alt={label} className="w-6 h-6" />
    <span>{label}</span>
  </div>
);

export default SidebarItem;
