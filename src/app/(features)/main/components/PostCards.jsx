// components/PostCard.jsx
const PostCard = ({ username, imgUrl, content }) => (
  <div
    style={{
      borderBottom: "1px solid #dbdbdb",
      backgroundColor: "#fff",
      marginBottom: "32px",
      fontSize: "14px",
    }}
  >
    {/* 1. 상단 사용자 정보 */}
    <div
      style={{
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontWeight: "bold" }}>{username}</div>
      <div>•••</div>
    </div>

    {/* 2. 이미지 */}
    <img
      src={imgUrl}
      alt="게시물 이미지"
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
    />

    {/* 3. 액션 버튼 (간단히 텍스트 처리) */}
    <div style={{ padding: "12px" }}>
      <div style={{ marginBottom: "4px" }}>❤️ 💬 ✈️</div>
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        좋아요 167개
      </div>

      {/* 4. 본문 */}
      <div>
        <span style={{ fontWeight: "bold" }}>{username}</span> {content}
      </div>

      {/* 5. 댓글 더 보기 */}
      <div style={{ color: "gray", marginTop: "6px", cursor: "pointer" }}>
        댓글 4개 모두 보기
      </div>

      {/* 6. 댓글 입력창 (생략 가능) */}
    </div>
  </div>
);

export default PostCard;
