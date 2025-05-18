// components/RecommendedUser.jsx
const RecommendedUser = ({ username, description, img }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    }}
  >
    <img
      src={img}
      alt={`${username} 프로필`}
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
      }}
    />
    <div style={{ flex: 1, marginLeft: "12px" }}>
      <div style={{ fontSize: "14px", fontWeight: "bold" }}>{username}</div>
      <div style={{ fontSize: "12px", color: "gray" }}>{description}</div>
    </div>
    <span
      style={{
        fontSize: "12px",
        fontWeight: "bold",
        color: "#0095f6",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      팔로우
    </span>
  </div>
);

export default RecommendedUser;
