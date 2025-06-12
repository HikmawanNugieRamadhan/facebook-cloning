import React from "react";

const ContactItem = ({ name }) => {
  return (
    <div>
      {name.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            <span key={index} className="w-2 h-2 bg-green-500 rounded-full" />
            <span key={index} className="text-sm">{item}</span>
          </div>
        )
      })}
    </div>
  );
};

export default ContactItem;