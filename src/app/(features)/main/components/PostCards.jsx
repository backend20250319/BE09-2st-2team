// components/PostCard.jsx
"use client";
import Link from "next/link";
const PostCard = ({ username, profileImgUrl, imgUrl, content }) => {
  const commentCount = Math.floor(Math.random() * 1000) + 1; // 1~1000 사이 난수
  const likeCount = Math.floor(Math.random() * 10000) + 1; // 1~10000 사이 난수
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
          justifyContent: "space-between", // ← 더보기 버튼 오른쪽 정렬용
        }}
      >
        {/* 왼쪽: 프로필 이미지 + 사용자 이름 */}
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

        {/* 오른쪽: 더보기 버튼 */}
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
        <div style={{ marginBottom: "4px" }}>❤️ 💬 ✈️</div>
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
          좋아요 {likeCount}개
        </div>
        {/* 4. 본문 */}
        <div>
          <span style={{ fontWeight: "bold" }}>{username}</span> {content}
        </div>
        {/* 5. 댓글 더 보기 */}

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
        {/* 6. 댓글 입력창 (생략 가능) */}
      </div>
    </div>
  );
};

export default PostCard;
