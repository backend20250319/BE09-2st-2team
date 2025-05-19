import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { LuSend } from "react-icons/lu";

export default function StoryFooter({ user }) {
  const [liked, setLiked] = useState(false);
  const handleToggle = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div className="story-footer-container">
      <input
        className="story-footer-input"
        type="text"
        placeholder={`${user}님에게 답장하기 ...`}
      />
      <button
        className={`action-btn like-btn ${liked ? "liked" : ""}`}
        onClick={handleToggle}
      >
        {liked ? (
          <FaHeart className="heart-icon liked" />
        ) : (
          <FaRegHeart className="heart-icon" />
        )}
      </button>
      <LuSend style={{ width: "22PX", height: "22PX" }} />
    </div>
  );
}
