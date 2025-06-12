import React from "react";
import SidebarItem from "./SidebarItem";
import ShortcutItem from "./ShortcutItem";
import { sidebarGroup, sidebarMenus } from "../libs/variable";

const SidebarLeft = () => {
  return (
    <aside className="w-1/5 hidden lg:flex flex-col gap-4 p-4 bg-white text-sm">
      {/* Profil */}
      <div className="font-bold text-base mb-2">Hikmawan Nugie Ramadhan</div>

      {/* Menu */}
      <div className="flex flex-col gap-1">
        {sidebarMenus.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>

      {/* Shortcuts */}
      <div className="pt-4 border-t font-semibold text-gray-600">Shortcuts</div>
      <div className="flex flex-col gap-1">
        {sidebarGroup.map((item, index) => (
          <ShortcutItem key={index} icon={item.icon} label={item.label} />
        ))}
      </div>

    </aside>
  );
};

export default SidebarLeft;