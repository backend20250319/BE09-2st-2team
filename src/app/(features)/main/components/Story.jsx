// components/StoryBar.jsx

const StoryBar = ({ children }) => (
  <div
    style={{
      colorScheme: "light",
      height: "100px",
      backgroundColor: "#fff",
      border: "1px solid #dbdbdb",
      marginBottom: "18px",
      direction: "ltr",
      fontSize: "14px",
      width: "628px",
      overflowX: "auto", // ✅ 가로 스크롤
      whiteSpace: "nowrap",
      display: "flex", // ✅ 자식들을 가로 배치
    }}
  >
    {children}
  </div>
);

// 개별 스토리 아이템
const StoryItem = ({ username, imgSrc }) => (
  <div style={{ width: "66px", marginRight: "12px", textAlign: "center" }}>
    <div
      style={{
        width: "56px",
        height: "56px",
        margin: "0 auto",
        borderRadius: "50%",
        border: "2px solid transparent",
        background:
          "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
        padding: "2px",
      }}
    >
      <img
        src={imgSrc}
        alt={username}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid white",
        }}
      />
    </div>
    <div
      style={{
        fontSize: "12px",
        marginTop: "6px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {username}
    </div>
  </div>
);

// 스토리 목록을 넣는 곳
const Stories = () => {
  const storyUsers = [
    { username: "maestro", imgSrc: "/images/main/insta_basicprofile.jpg" },
    { username: "ironMAN", imgSrc: "/images/profile/profile1.jpg" },
    { username: "blueThings", imgSrc: "/images/story3.jpg" },
    { username: "leeMunSeok", imgSrc: "/images/story4.jpg" },
    { username: "firstV", imgSrc: "/images/story5.jpg" },
    { username: "1__sky", imgSrc: "/images/story6.jpg" },
    { username: "forUUS", imgSrc: "/images/story7.jpg" },
  ];

  return (
    <>
      {storyUsers.map((user, idx) => (
        <StoryItem key={idx} {...user} />
      ))}
    </>
  );
};

export default StoryBar;
export { Stories };
