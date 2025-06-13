import React from "react";
import StorySection from "./components/StorySection";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import Header from "./components/Header";
import SidebarLeft from "./components/SidebarLeft";
import ContactItem from "./components/ContactItem";
import FriendRequestItem from "./components/FriendRequestItem";
import FriendRequestList from "./components/FriendRequestList";
import { contacts } from "./libs/variable";
import { posts } from "./libs/variable";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      <div className="flex bg-gray-100 min-h-screen text-gray-800">
        {/* Sidebar Kiri */}
        <SidebarLeft />

        {/* Konten Utama */}
        <main className="flex-1 max-w-[700px] mx-auto p-4">
          <div className="bg-white p-4 rounded shadow mb-4">
            <StorySection />
          </div>
          <div className="mb-4">
            <CreatePost />
          </div>
          {posts.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}

        </main>

        {/* Sidebar Kanan */}
        <aside className="w-1/5 hidden xl:flex flex-col gap-6 p-4 text-sm bg-white">
          {/* Sponsored */}
          <div>
            <div className="font-semibold text-gray-600 mb-2">Sponsored</div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="https://picsum.photos/seed/pizza/80/60"
                alt="Lebo's Pizza"
                className="w-20 h-14 object-cover rounded"
              />
              <div>
                <p className="font-medium text-sm">Gomu Gomu No</p>
                <p className="text-xs text-gray-500">hottest new Devil Fruit place 🍕</p>
              </div>
            </div>
          </div>

          {/* Friend Requests */}
          <div>
            <div className="p-4">
              <FriendRequestList />
            </div>
          </div>

          {/* Birthdays */}
          <div>
            <div className="font-semibold text-gray-600 mb-2">Birthdays</div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎉</span>
              <p><strong>Kuma</strong> and 2 others have birthdays today</p>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div className="font-semibold text-gray-600 mb-2">Contacts</div>
            <div className="flex flex-col gap-2">
              <ContactItem name={contacts} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default App;
