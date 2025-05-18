"use client";
// components/FollowRequeste.jsx
import { useRouter } from "next/navigation";

export default function FollowRequest({ user, count, profile }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/notifications/noti");
  };
  return (
    <div
      className="follow-request"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={profile} className="noti-profile" />
      <div>
        <div className="noti-bold">팔로우 요청</div>
        <div>
          {user}님 외 {count}명
        </div>
      </div>
      <div
        className="noti-dot"
        style={{ marginLeft: "100px", marginRight: "12px" }}
      />
      <img
        src="/images/noti/arrowright.png"
        style={{ width: "15px", height: "15px" }}
      />
    </div>
  );
}
