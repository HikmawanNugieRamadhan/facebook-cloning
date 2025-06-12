import React from "react";
import SidebarItem from "./SidebarItem";
import ShortcutItem from "./ShortcutItem";

const SidebarLeft = () => {
  return (
    <aside className="w-1/5 hidden lg:flex flex-col gap-4 p-4 bg-white text-sm">
      {/* Profil */}
      <div className="font-bold text-base mb-2">Hikmawan Nugie Ramadhan</div>

      {/* Menu */}
      <div className="flex flex-col gap-1">
        <SidebarItem icon="./assets/icons/clock.svg" label="Watch" />
        <SidebarItem icon="./assets/icons/events.svg" label="Events" />
        <SidebarItem icon="./assets/icons/friend.svg" label="Friends" />
        <SidebarItem icon="./assets/icons/memories.svg" label="Memories" />
        <SidebarItem icon="./assets/icons/birthday.svg" label="Birthday" />
        <SidebarItem icon="./assets/icons/games.svg" label="Games" />
      </div>

      {/* Shortcuts */}
      <div className="pt-4 border-t font-semibold text-gray-600">Shortcuts</div>
      <div className="flex flex-col gap-1">
        <ShortcutItem icon="./assets/group/untag.jpg" label="Universitas 17 Agustus 1945 Surabaya" />
        <ShortcutItem icon="./assets/group/grup-bluelok.jpg" label="Futsal Kampung" />
        <ShortcutItem icon="./assets/group/barcelona.jpg" label="FC Barcelona" />
      </div>

    </aside>
  );
};

export default SidebarLeft;