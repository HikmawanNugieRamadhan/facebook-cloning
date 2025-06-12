import React from "react";

const FriendRequestItem = ({ name, avatar }) => {
  return (
    <div className="flex items-start gap-3 mb-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <p className="font-medium text-sm">{name}</p>
        <div className="flex gap-2 mt-1">
          <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition">
            Confirm
          </button>
          <button className="bg-gray-200 text-xs px-3 py-1 rounded hover:bg-gray-300 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestItem;