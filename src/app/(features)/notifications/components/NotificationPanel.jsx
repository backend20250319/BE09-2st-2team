"use client";

import "../style.css";
import FollowRequestPanel from "./FollowRequestPenel";
import FollowRequest from "./FollowRequeste";
import NotificationItem from "./NotificationItem";
import NotificationSection from "./NotificationSection";
import { useState } from "react";

export default function NotificationPanel({ isOpen }) {
  const [panel, setPanel] = useState("main");

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "72px",
        width: "400px",
        height: "100vh",
        overflow: "hidden",
        zIndex: 1000,
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "100vh",
          transform: panel === "main" ? "translateX(0)" : "translateX(-400px)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div
          className="container"
          style={{
            width: "400px",
            height: "100vh",
            overflowY: "auto",
            backgroundColor: "white",
          }}
        >
          <h2 style={{ marginBottom: "12px", padding: "8px 12px" }}>알림</h2>
          <div
            onClick={() => setPanel("followRequest")}
            style={{ cursor: "pointer" }}
          >
            <FollowRequest
              user="one_lastweek"
              count={3}
              profile="/images/profile1.jpg"
            />
          </div>

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
            <NotificationItem
              user1="cooling_0"
              user2="no.yoonseok"
              message="님이 회원님의 스토리를 좋아합니다."
              profile="/images/noti/id1profile.jpg"
              preview="/images/story/story1.jpg"
              time="1주"
            />
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
            <NotificationItem
              user1="no.yoonseok"
              message="님이 회원님의 스토리를 좋아합니다."
              profile="/images/noti/id2profile.jpg"
              preview="/images/story/story2.jpg"
              time="2주"
            />
            <NotificationItem
              user1="no.yoonseok"
              message="님이 회원님의 스토리를 좋아합니다."
              profile="/images/noti/id2profile.jpg"
              preview="/images/story/story2.jpg"
              time="2주"
            />
            <NotificationItem
              user1="no.yoonseok"
              message="님이 회원님의 스토리를 좋아합니다."
              profile="/images/noti/id2profile.jpg"
              preview="/images/story/story2.jpg"
              time="2주"
            />
          </NotificationSection>
        </div>

        <FollowRequestPanel onBack={() => setPanel("main")} />
      </div>
    </div>
  );
}
