import React from "react";
import { postActions } from "../libs/variable";

const CreatePost = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Top: Avatar + Input */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="./assets/images/profile.jpg"
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's on your mind, Hikmawan?"
          className="flex-1 bg-gray-100 px-4 py-2 rounded-full focus:outline-none text-sm"
        />
      </div>

      <div className="flex justify-between pt-2 border-t border-gray-200 text-sm text-gray-600">

        {postActions.map((item, index) => {
          return (
            <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
              <img src={item.image} alt="Photo" className="w-5 h-5" />
              <span>{item.text}</span>
            </button>
          )
        })}
        {/* Bottom: Actions */}
      </div>
    </div>
  );
};

export default CreatePost;