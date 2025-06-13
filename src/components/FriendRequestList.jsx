// components/FriendRequestList.jsx
import React from "react";
import FriendRequestItem from './FriendRequestItem';
import { friendRequest } from "../libs/variable";

const FriendRequestList = () => {
  return (
    <div>
      <div className="font-semibold text-gray-600 mb-2">Friend Requests</div>
      {friendRequest.map((item, index) => (
        <FriendRequestItem
          key={index}
          name={item.name}
          avatar={item.avatar}
        />
      ))}
    </div>
  );
};

export default FriendRequestList;