import React from "react";
import TooltipIcon from "./TooltipIcon"; // pastikan path-nya benar sesuai struktur project

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 px-4 py-2 flex items-center justify-between">
      {/* Kiri: Logo + Search */}
      <div className="flex items-center gap-3">
        <img src="./assets/icons/logo-F.svg" alt="Facebook" className="w-8 h-8" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="bg-gray-100 text-sm px-3 py-1 rounded-full focus:outline-none hidden md:block"
        />
      </div>

      {/* Tengah: Navigasi */}
      <div className="hidden md:flex gap-6 text-gray-500">
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <TooltipIcon iconSrc="/assets/icons/home.svg" alt="Home" label="Home" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <TooltipIcon iconSrc="/assets/icons/reels.svg" alt="Reels" label="Video" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <TooltipIcon iconSrc="/assets/icons/store.svg" alt="Marketplace" label="Marketplace" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <TooltipIcon iconSrc="/assets/icons/group.svg" alt="Groups" label="Groups" />
        </button>
      </div>

      {/* Kanan: Actions */}
      <div className="flex items-center gap-3 text-gray-600">
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <TooltipIcon iconSrc="/assets/icons/bell.svg" alt="Notifications" label="Notifications" size="w-5 h-5" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <TooltipIcon iconSrc="/assets/icons/chat.svg" alt="Messenger" label="Messenger" size="w-5 h-5" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full">
          <TooltipIcon iconSrc="/assets/icons/settings.svg" alt="Settings" label="Settings" size="w-5 h-5" />
        </button>
        <img
          src="/assets/images/profile.jpg"
          alt="Me"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;