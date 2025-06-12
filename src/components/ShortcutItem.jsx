import React from "react";

const ShortcutItem = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
      <img
        src={icon}
        alt={label}
        className="w-12 h-8 object-cover rounded-md" // ← Persegi panjang & rapi
      />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default ShortcutItem;