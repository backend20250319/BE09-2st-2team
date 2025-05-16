// components/Navbar.jsx
const Navbar = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "244px", // 사이드바 너비
      height: "100dvh", // 화면 전체 높이
      boxSizing: "border-box",
      backgroundColor: "#fff",
      borderRight: "1px solid #dbdbdb",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 20px 12px",
    }}
  >
    <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>Instagram</h2>

    <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_home.svg"
          width={24}
          height={24}
        />
        홈
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_search.svg"
          width={24}
          height={24}
        />
        검색
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_explore.svg"
          width={24}
          height={24}
        />
        탐색 탭
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_reels.svg"
          width={24}
          height={24}
        />
        릴스
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_message.svg"
          width={24}
          height={24}
        />
        메시지
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_notification.svg"
          width={24}
          height={24}
        />
        알림
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_new.svg"
          width={24}
          height={24}
        />
        만들기
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_basicprofile.jpg"
          width={24}
          height={24}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        프로필
      </button>
      <br />
      <br />
      <br />
      <br />
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_threads.svg"
          width={24}
          height={24}
        />
        Threads
      </button>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="../../../../../images/main/insta_settings.svg"
          width={24}
          height={24}
        />
        더 보기
      </button>
    </nav>
  </div>
);

export default Navbar;
