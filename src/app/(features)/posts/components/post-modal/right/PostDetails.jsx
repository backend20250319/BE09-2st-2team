import React, { useState } from "react";
import "../PostModal.css";

const PostDetails = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked || false);
  const [saved, setSaved] = useState(post.isSaved || false);
  const [showComments, setShowComments] = useState(true);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);
  const commentCount = post.comments?.length || 0;

  const toggleLike = () => {
    setLikeCount(likeCount + (liked ? -1 : 1));
    setLiked(!liked);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="modal-right post-details-grid">
      {/* 첫 번째 행: 아바타 + 이름 */}
      <div className="modal-header">
        <img src={post.userAvatar} alt="프로필" className="avatar" />
        <span className="username">{post.username}</span>
      </div>

      {/* 두 번째 행: 설명 */}
      <div className="modal-description">{post.description}</div>

      {/* 세 번째 행: 좋아요, 댓글, 스크랩 */}
      <div className="post-actions">
        <button
          className={`action-btn like-btn ${liked ? "liked" : ""}`}
          onClick={toggleLike}
          aria-label={liked ? "좋아요 취소" : "좋아요"}
        >
          {liked ? "❤️" : "🤍"}
        </button>
        <span className="like-count">{likeCount}</span>

        <button
          className="action-btn comment-btn"
          onClick={() => setShowComments(!showComments)}
          aria-label="댓글 보기/숨기기"
        >
          💬
        </button>
        <span className="comment-count">{commentCount}</span>

        <button
          className={`action-btn save-btn ${saved ? "saved" : ""}`}
          onClick={toggleSave}
          aria-label={saved ? "스크랩 취소" : "스크랩"}
        >
          {saved ? "🔖" : "📑"}
        </button>
      </div>

      {/* 댓글 영역은 여전히 따로 보여줌 */}
      {showComments && (
        <div className="modal-comments">
          {post.comments?.map((comment, index) => (
            <div key={index} className="comment">
              <strong>{comment.username}</strong> {comment.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostDetails;
