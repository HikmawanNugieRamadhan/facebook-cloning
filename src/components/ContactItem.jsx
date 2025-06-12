import React from "react";

const ContactItem = ({ name }) => {
  return (
    <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
      <span className="w-2 h-2 bg-green-500 rounded-full" />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default ContactItem;