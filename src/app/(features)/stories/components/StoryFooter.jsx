export default function StoryFooter({ user }) {
  return (
    <div className="story-footer-container">
      <input
        className="story-footer-input"
        type="text"
        placeholder={`${user}님에게 답장하기 ...`}
      />
      <img src="/images/noti/heart.svg" />
      <img src="/images/noti/send.svg" />
    </div>
  );
}
