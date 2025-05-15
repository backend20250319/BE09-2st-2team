"use client";
import "../style.css";

export default function NotifiacationForm() {
  return (
    <div className="noti-container">
      <div>
        <div
          style={{
            height: 30,
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          알림
        </div>
        <div className="noti-item">
          <img src="/images/feed/feed1_3.jpg" className="noti-profile" />
          <div className="noti-content">
            팔로우 요청
            <br />
            one_lastweek님 외 3명
          </div>
        </div>
      </div>
      <hr style={{ color: "grey" }} />
      <div>
        <div
          style={{
            height: 30,
            fontWeight: 700,
            fontSize: 16,
            paddingTop: 15,
          }}
        >
          이번 달
        </div>
        <div className="noti-item">
          <img src="/images/noti/id1profile.jpg" className="noti-profile" />
          <div className="noti-content">
            cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
          </div>
          <img src="/images/profile/profile1.jpg" className="noti-story" />
        </div>
        <div className="noti-item">
          <img src="/images/noti/id1profile.jpg" className="noti-profile" />
          <div className="noti-content"></div>
          cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
          <img src="/images/profile/profile1.jpg" className="noti-story" />
        </div>
        <div className="noti-item">
          <img src="/images/noti/id1profile.jpg" className="noti-profile" />
          <div className="noti-content"></div>
          cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
          <img src="/images/profile/profile1.jpg" className="noti-story" />
        </div>
      </div>
      <hr style={{ color: "grey" }} />
      <div>
        <div
          style={{
            height: 30,
            fontWeight: 700,
            fontSize: 16,
            paddingTop: 15,
          }}
        >
          이전 활동
        </div>
        <div className="noti-item">
          <img src="/images/noti/id1profile.jpg" className="noti-profile" />
          <div className="noti-content"></div>
          cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
          <img src="/images/profile/profile1.jpg" className="noti-story" />
        </div>
        <div className="noti-item">
          <img src="/images/noti/id1profile.jpg" className="noti-profile" />
          <div className="noti-content"></div>
          cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
          <img src="/images/profile/profile1.jpg" className="noti-story" />
        </div>
        <div className="noti-item">
          <img src="/images/noti/id1profile.jpg" className="noti-profile" />
          <div className="noti-content"></div>
          cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
          <img src="/images/profile/profile1.jpg" className="noti-story" />
        </div>
        <div className="noti-item">
          <img src="/images/noti/id1profile.jpg" className="noti-profile" />
          <div className="noti-content"></div>
          cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
          <img src="/images/profile/profile1.jpg" className="noti-story" />
        </div>
      </div>
    </div>
  );
}
