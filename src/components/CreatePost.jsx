import React from "react";

const CreatePost = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* Top: Avatar + Input */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="./assets/images/profile.jpg" // <-- Ganti dengan path foto kamu
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's on your mind, Hikmawan?"
          className="flex-1 bg-gray-100 px-4 py-2 rounded-full focus:outline-none text-sm"
        />
      </div>

      {/* Bottom: Actions */}
      <div className="flex justify-between pt-2 border-t border-gray-200 text-sm text-gray-600">
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
          <img src="./assets/icons/camera.svg" alt="Photo" className="w-5 h-5" />
          <span>Photo/Video</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
          <img src="./assets/icons/tag.svg" alt="Tag" className="w-5 h-5" />
          <span>Tag Friends</span>
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
          <img src="./assets/icons/emoticon.svg" alt="Feeling" className="w-5 h-5" />
          <span>Feeling/Activity</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;