import { CiHeart } from "react-icons/ci";

export default function StoryFooter({ user }) {
  return (
    <div className="story-footer-container">
      <input
        className="story-footer-input"
        type="text"
        placeholder={`${user}님에게 답장하기 ...`}
      />
      <CiHeart style={{ width: "24px", height: "24px" }} />
      <img src="/images/noti/send.svg" />
    </div>
  );
}
