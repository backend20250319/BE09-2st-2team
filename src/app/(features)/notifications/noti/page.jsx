// app/notifications/page.jsx
"use client";
import NotificationItem from "../components/NotificationItem";
import NotificationSection from "../components/NotificationSection";
import "../style.css";
import FollowRequest from "../components/FollowRequeste";

export default function NotificationsPage() {
  return (
    <div>
      <div className="container">
        <h2 style={{ marginBottom: "12px", padding: "8px 12px" }}>알림</h2>
        <FollowRequest
          user="one_lastweek"
          count={3}
          profile="/images/profile1.jpg"
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
          <NotificationItem
            user1="no.yoonseok"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/noti/id2profile.jpg"
            preview="/images/story/story2.jpg"
            time="2주"
          />
          <NotificationItem
            user1="hxx.oxx_1"
            message="님이 회원님을 팔로우하기 시작했습니다."
            profile="/images/noti/id3profile.jpg"
            time="2주"
            follow
          />
        </NotificationSection>
        <div className="divider"></div>
        <NotificationSection title="이전 활동">
          <NotificationItem
            user1="cooling_0"
            user2="no.yoonseok"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/noti/id1profile.jpg"
            preview="/images/story/story1.jpg"
            time="1주"
          />
          <NotificationItem
            user1="no.yoonseok"
            message="님이 회원님의 스토리를 좋아합니다."
            profile="/images/noti/id2profile.jpg"
            preview="/images/story/story2.jpg"
            time="2주"
          />
          <NotificationItem
            user1="hxx.oxx_1"
            message="님이 회원님을 팔로우하기 시작했습니다."
            profile="/images/noti/id3profile.jpg"
            time="2주"
            follow
          />
          <NotificationItem
            user1="hxx.oxx_1"
            message="님이 회원님을 팔로우하기 시작했습니다."
            profile="/images/noti/id3profile.jpg"
            time="2주"
            follow
          />
        </NotificationSection>
      </div>
    </div>
  );
}
