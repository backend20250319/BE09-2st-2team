"use client";

import React, { useState } from "react";
import PostModal from "./components/post-modal/PostModal";

export default function PostModalTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => setIsModalOpen(false);

  return (
    <div style={{ padding: "50px" }}>
      <h1>🧪 Post Modal 테스트 페이지</h1>

      {isModalOpen && (
        <PostModal
          post={{
            id: 1,
            images: [
              "/images/feed/feed1_1.jpg",
              "/images/feed/feed1_2.jpg",
              "/images/feed/feed1_3.jpg",
              "/images/feed/feed1_4.jpg",
              "/images/feed/feed1_5.jpg",
              "/images/feed/feed1_6.jpg",
            ], // id만 있으면 PostModal 안에서 이미지 경로가 자동 생성됩니다.
            username: "qls09",
            userAvatar: "/images/profile/profile1.jpg",
            description: "테스트 게시글입니다!",
            comments: [
              { username: "user1", text: "좋아요!" },
              { username: "user2", text: "멋져요~" },
            ],
          }}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
