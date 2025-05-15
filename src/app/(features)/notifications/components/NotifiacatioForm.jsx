"use client";
import "../style.css";

export default function NotifiacationForm() {
  return (
    <div className="noti-container">
      <div>
        <div
          style={{
            height: 30,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          알림
        </div>
        <div className="noti-item">
          <img
            src="public/images/noti/id1.profile.jpg"
            className="noti-profile"
          ></img>
          <div className="noti-content"></div>
          cooling_0님과 no.yoonseok님이 회원님의 스토리를 좋아합니다.
        </div>
      </div>
      <div>
        <div
          style={{
            height: 30,
            fontWeight: "bold",
            fontSize: 15,
            paddingTop: 15,
          }}
        >
          이번 달
        </div>
        <div className="noti-item">알림</div>
        <div className="noti-item">알림</div>
        <div className="noti-item">요소 공간</div>
      </div>
      <div>
        <div
          style={{
            height: 30,
            fontWeight: "bold",
            fontSize: 15,
            paddingTop: 15,
          }}
        >
          이전 활동
        </div>
        <div className="noti-item">알림</div>
        <div className="noti-item">요소 공간</div>
        <div className="noti-item">요소 공간</div>
        <div className="noti-item">요소 공간</div>
        <div className="noti-item">요소 공간</div>
      </div>
    </div>
  );
}
