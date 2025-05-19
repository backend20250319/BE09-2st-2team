"use client";

import "../../notifications/style.css";
import FollowRequestPanel from "../../notifications/components/FollowRequestPenel";
import FollowRequest from "./FollowRequeste";
import NotificationItem from "../../notifications/components/NotificationItem";
import NotificationSection from "../../notifications/components/NotificationSection";
import { useState } from "react";

export default function NotificationPanel({ isOpen, onClose }) {
  const [panel, setPanel] = useState("main");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "244px", // NavBar 옆
        width: "400px",
        height: "100vh",
        zIndex: 1000,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: "white",
        overflow: "hidden", // 넘침 방지
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* 알림 콘텐츠 */}
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          position: "relative", // absolute 슬라이드 기준
        }}
      >
        <h2 style={{ marginBottom: "12px", padding: "10px 23px" }}>알림</h2>

        <FollowRequest
          user="one_lastweek"
          count={3}
          profile="/images/profile/profile1.jpg"
          onClick={() => setPanel("followRequest")}
        />

        <div className="divider"></div>

        <NotificationSection title="이번 달">
          <NotificationItem
            user1="cooling_0"
            user2="no.yoonseok"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/noti/id1profile.jpg"
            preview="/images/story/story1.jpg"
            time="1주"
          />
        </NotificationSection>

        <div className="divider"></div>

        <NotificationSection title="이전 활동">
          <NotificationItem
            user1="no.yoonseok"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/noti/id2profile.jpg"
            preview="/images/story/story2.jpg"
            time="2주"
          />
        </NotificationSection>
      </div>

      {/* FollowRequestPanel: 알림 위로 덮는 슬라이드 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1001,
          backgroundColor: "white",
          transform:
            panel === "followRequest" ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <FollowRequestPanel onBack={() => setPanel("main")} />
      </div>
    </div>
  );
}
