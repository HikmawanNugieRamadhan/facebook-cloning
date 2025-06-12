import React from "react";

const stories = [
  { name: "Me", image: "./assets/images/images.jpg" },
  { name: "Luffy", image: "./assets/images/luffy.jpg" },
  { name: "Naruto", image: "./assets/images/desa.jpg" },
  { name: "Guts", image: "./assets/images/GutsBerserk.jpg" },
  { name: "Isagi", image: "./assets/images/isagi.jpg" },
];

const StorySection = () => {
  return (
    <div className="flex overflow-x-auto space-x-4">
      {stories.map((story, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-24 h-40 rounded-lg bg-gray-200 relative overflow-hidden"
        >
          <img
            src={story.image}
            alt={story.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-1 w-full text-center">
            {story.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StorySection;