"use client";

import BackButton from "../components/BackButton";
import FollowItem from "../components/FollowItem";
import NotificationSection from "../components/NotificationSection";

export default function FollowRequestPage() {
  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BackButton />
        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "700",
            marginLeft: "120px",
            marginTop: "20px",
          }}
        >
          팔로우 요청
        </div>
      </div>
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
      />
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
      />
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
      />
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
      />
      <h4>회원님을 위한 추천</h4>
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        recomend="1"
      />
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
        recomend="1"
      />
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
        recomend="1"
        btmmessage={"@@@님외 4명이 팔로우 "}
      />
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
        recomend="1"
      />
    </div>
  );
}
