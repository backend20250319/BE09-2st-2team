"use client";
import React, { useState } from "react";
import DMItem from "./components/DMItem";
import "./page.css";

const DMListPage = () => {
  const [chatRooms, setChatRooms] = useState([]); // 빈 채팅 목록


  return (
    <div className="wrap">
      {/* 왼쪽: DM 목록 */}
      <div>
        <h1>Messages</h1>
        {chatRooms.length === 0 ? (
          <p>대화 목록이 없습니다.</p>
        ) : (
          chatRooms.map((room) => <DMItem key={room.id} room={room} />)
        )}
      </div>
      {/* 오른쪽: 메시지 비어 있을 때 */}
      <div>
        <img src="public\image\messages01.png" alt="Messenger Icon" style={{width:"100px",height:"100px",objectFit:"cover"}} />
        <h2>내 메시지</h2>
        <p>친구나 그룹에 비공개 사진과 메시지를 보내보세요.
        </p>
        <button style={{
  backgroundColor: "#3399ff",
  color: "white",
  border: "none",
  padding: "7px 16px",
  borderRadius: "15px",
  cursor: "pointer",
  fontWeight: "bold"
}}>
  메시지 보내기
</button>
      </div>
    </div>
  );
};

export default DMListPage;
