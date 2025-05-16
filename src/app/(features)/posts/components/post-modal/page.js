"use client";
import React, { useState } from "react";
import PostModal from "./PostModal";

const mockPost = {
  imageUrl: "https://via.placeholder.com/400",
  username: "sejong_dev",
  userAvatar: "https://via.placeholder.com/50",
  description: "오늘도 리액트 열공!",
  comments: [
    { username: "user1", text: "좋아요!" },
    { username: "user2", text: "멋져요~" },
  ],
};

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      <button onClick={() => setSelectedPost(mockPost)}>게시글 열기</button>
      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
};

export default App;
