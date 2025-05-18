"use client";

import BackButton from "./BackButton";
import FollowItem from "./FollowItem";

export default function FollowRequestPanel({ onBack }) {
  return (
    <div
      style={{
        width: "400px",
        height: "100vh",
        backgroundColor: "white",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "7px",
          marginBottom: "-26px",
          marginTop: "3px",
        }}
      >
        <BackButton onClick={onBack} />
        <h4 style={{ marginLeft: "90px" }}>팔로우 요청</h4>
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
      <h4 style={{ marginLeft: "20px" }}>회원님을 위한 추천</h4>
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
