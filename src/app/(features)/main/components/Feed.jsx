// components/Feed.jsx
import PostCard from "./PostCards";

const Feed = () => {
  const posts = [
    {
      username: "junseo",
      imgUrl: "/images/feed/feed1_1.jpg",
      content: "첫 번째 게시물입니다!",
    },
    { username: "react_dev", content: "React 너무 재밌어요 🤩" },
    { username: "openai", content: "ChatGPT가 짱이야." },
    { username: "user404", content: "이건 테스트용 게시물입니다." },
  ];

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "10px",
      }}
    >
      {posts.map((post, index) => (
        <PostCard
          key={index}
          username={post.username}
          imgUrl={post.imgUrl}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Feed;
