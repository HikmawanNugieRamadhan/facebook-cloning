import React from "react";

const PostCard = ({ name, avatar, time, text, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-2">
        <img
          src="./assets/images/Aokiji-pp.jpg"
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>

      {/* Caption */}
      <p className="text-sm mb-3">{text}</p>

      {/* Image */}
      {image && (
        <img
          src="./assets/images/Aokiji-sehat.jpg"
          alt="Post"
          className="w-full rounded-lg object-cover max-h-[400px]"
        />
      )}

      {/* Actions with SVGs */}
      <div className="flex justify-between text-sm text-gray-600 mt-4 border-t pt-2">
        <button className="hover:bg-gray-100 p-2 rounded w-full flex justify-center items-center gap-1">
          <img src="./assets/icons/like.svg" alt="Like" className="w-4 h-4" />
          Like
        </button>
        <button className="hover:bg-gray-100 p-2 rounded w-full flex justify-center items-center gap-1">
          <img src="./assets/icons/comment.svg" alt="Comment" className="w-4 h-4" />
          Comment
        </button>
        <button className="hover:bg-gray-100 p-2 rounded w-full flex justify-center items-center gap-1">
          <img src="./assets/icons/share.svg" alt="Share" className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;