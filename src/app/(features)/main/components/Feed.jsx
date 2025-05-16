// components/Feed.jsx
import PostCard from "./PostCards";

const FeedPage = ({ children }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
    }}
  >
    {children}
  </div>
);

const FeedTray = ({ children }) => (
  <div
    style={{
      width: "468px",
      margin: "0 auto",
    }}
  >
    {children}
  </div>
);

const Feed = () => {
  const posts = [
    {
      username: "juns2o",
      imgUrl: "/images/feed/feed1/feed1_1.jpg",
      content: "안녕하세요, 박준서입니다.",
    },
    {
      username: "lg_twins_fighting",
      imgUrl: "/images/feed/feed1/feed1_2.jpg",
      content: "LG Twins 파이팅❤",
    },
    {
      username: "ys_politics",
      imgUrl: "/images/feed/feed1/feed1_3.jpg",
      content: "국민의, 국민에 의한, 국민을 위한 정치",
    },
    {
      username: "statistics_dataScience",
      imgUrl: "/images/feed/feed1/feed1_4.jpg",
      content: "우리 같이 적분하지 않을래?",
    },
    {
      username: "mlb_baseballNews",
      imgUrl: "/images/feed/feed2/feed2_1.jpg",
      content: "오늘 김혜성 선수가 mlb에서 뛰어난 활약을 펼쳤습니다.",
    },
    {
      username: "princess",
      imgUrl: "/images/feed/feed2/feed2_2.jpg",
      content: "난 원령공주, 넌 원령왕자",
    },
    {
      username: "prince_OH",
      imgUrl: "/images/feed/feed2/feed2_3.jpg",
      content: "만나서 반갑습니다. 엘지 오지환입니다.",
    },
    {
      username: "dust_star_cccandy",
      imgUrl: "/images/feed/feed2/feed2_4.jpg",
      content: "난 이~~따만큼 큰 별사탕 먹을 수 있다?!.",
    },
    {
      username: "harryPotter",
      imgUrl: "/images/feed/feed2/feed2_5.jpg",
      content: "입닥쳐 말포이",
    },
    {
      username: "ys_politics",
      imgUrl: "/images/feed/feed2/feed2_6.jpg",
      content: "헌법 제1조 1항: 대한민국은 민주공화국이다.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "rgb(255,255,255)",
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

export default FeedPage;
export { Feed };
export { FeedTray };
