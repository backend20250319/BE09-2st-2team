"use client";

import { FaHeart, FaRegHeart, FaRegBookmark } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Link from "next/link";

const PostCard = ({ username, profileImgUrl, imgUrl, content }) => {
  const [commentCount, setCommentCount] = useState(null);
  const [likeCount, setLikeCount] = useState(null);
  const [liked, setLiked] = useState(false);
  const [onComment, setOnComment] = useState(false); // 나중에 댓글 모달용
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    // 클라이언트에서만 난수 생성
    setCommentCount(Math.floor(Math.random() * 1000) + 1);
    setLikeCount(Math.floor(Math.random() * 10000) + 1);
  }, []);

  const handleLike = () => {
    setLiked(!liked);
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 250);
  };

  return (
    <div
      style={{
        borderBottom: "1px solid #dbdbdb",
        backgroundColor: "#fff",
        marginBottom: "20px",
        fontSize: "14px",
      }}
    >
      {/* 1. 상단 사용자 정보 */}
      <div
        style={{
          padding: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={profileImgUrl}
            alt={`${username}의 프로필 이미지`}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div style={{ fontWeight: "bold" }}>{username}</div>
        </div>

        <div
          onMouseDown={(e) => {
            const circles = e.currentTarget.querySelectorAll("circle");
            circles.forEach((circle) => circle.setAttribute("fill", "#aaa"));
          }}
          onMouseUp={(e) => {
            const circles = e.currentTarget.querySelectorAll("circle");
            circles.forEach((circle) =>
              circle.setAttribute("fill", "currentColor")
            );
          }}
          onMouseLeave={(e) => {
            const circles = e.currentTarget.querySelectorAll("circle");
            circles.forEach((circle) =>
              circle.setAttribute("fill", "currentColor")
            );
          }}
          style={{
            width: "24px",
            height: "24px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <circle cx="6" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="18" cy="12" r="1.5" />
          </svg>
        </div>
      </div>

      {/* 2. 이미지 */}
      <img
        src={imgUrl}
        alt="게시물 이미지"
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />

      {/* 3. 액션 버튼 */}
      <div style={{ padding: "12px" }}>
        <div style={{ display: "flex", gap: "14px", marginBottom: "4px" }}>
          <button
            onClick={handleLike}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              opacity: 1,
              transition: "opacity 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            {liked ? (
              <FaHeart
                color="red"
                size={20}
                className={isPopping ? "pop-heart" : ""}
              />
            ) : (
              <FaRegHeart size={20} className={isPopping ? "pop-heart" : ""} />
            )}
          </button>

          <button
            onClick={() => {
              setOnComment(true);
              console.log("댓글 아이콘 클릭됨");
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              opacity: 1,
              transition: "opacity 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            <FaRegComment size={20} />
          </button>

          <button
            onClick={() => {
              console.log("공유 버튼 클릭됨");
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              opacity: 1,
              transition: "opacity 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            <LuSend size={20} />
          </button>
        </div>

        {/* 좋아요 수 */}
        {likeCount !== null && (
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            좋아요 {likeCount + (liked ? 1 : 0)}개
          </div>
        )}

        {/* 4. 본문 */}
        <div>
          <span style={{ fontWeight: "bold" }}>{username}</span> {content}
        </div>

        {/* 5. 댓글 더 보기 */}
        {commentCount !== null && (
          <Link href="/posts" style={{ textDecoration: "none" }}>
            <div
              style={{
                color: "gray",
                marginTop: "6px",
                cursor: "pointer",
              }}
            >
              댓글 {commentCount}개 모두 보기
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostCard;
