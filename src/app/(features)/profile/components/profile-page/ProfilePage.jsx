import React, { useState } from "react";
import ProfileHeader from "./profile-header/ProfileHeader";
import ProfileTabs from "./profile-tabs/ProfileTabs";
import PostGrid from "./post-grid/PostGrid";
import PostModal from "@/app/(features)/posts/components/post-modal/PostModal";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedPost, setSelectedPost] = useState(null);

  const user = {
    avatar: "/images/profile/profile1.jpg",
    username: "playdata.io",
    posts: 110,
    followers: 1408,
    following: 119,
    description: "플레이데이터",
  };

  const posts = [
    { id: 1, imageUrl: "/images/profile/post/post1.jpg" },
    { id: 2, imageUrl: "/images/profile/post/post2.jpg" },
    { id: 3, imageUrl: "/images/profile/post/post3.jpg" },
    { id: 4, imageUrl: "/images/profile/post/post4.jpg" },
    { id: 5, imageUrl: "/images/profile/post/post5.jpg" },
    { id: 6, imageUrl: "/images/profile/post/post6.jpg" },
  ];

  return (
    <div className="profile-page">
      <ProfileHeader user={user} />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "posts" && (
        <PostGrid
          posts={posts}
          onImageClick={(post) => setSelectedPost(post)}
        />
      )}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default ProfilePage;
