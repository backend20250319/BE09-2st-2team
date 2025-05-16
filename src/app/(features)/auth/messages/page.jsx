"use client";
import React, { useState, useRef } from "react";
import "./page.css";
import NewMessageModal from "./components/MessagesInput";
import DMView from "./components/DMView";

const DMListPage = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const btnRef = useRef();
  const wrapRef = useRef();

  const handleStartChat = (user) => {
    const existingRoom = chatRooms.find((room) => room.user.id === user.id);
    if (existingRoom) {
      setSelectedRoom(existingRoom);
    } else {
      const newRoom = {
        id: Date.now(),
        user,
        messages: [],
      };
      setChatRooms((prev) => [...prev, newRoom]);
      setSelectedRoom(newRoom);
    }
    setModalOpen(false);
  };

  const handleSendMessage = (roomId, message) => {
    setChatRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? { ...room, messages: [...room.messages, { text: message }] }
          : room
      )
    );
  };

  const handleLeaveChat = () => {
    setSelectedRoom(null);
  };

  const handleDeleteChat = (roomId) => {
    setChatRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
    if (selectedRoom?.id === roomId) {
      setSelectedRoom(null);
    }
  };

  return (
    <div className="wrap" ref={wrapRef}>
      {/* 왼쪽: DM 목록 */}
      <div className="dm-list">
        <h1 style={{ marginTop: "80px" }}>메시지</h1>
        {chatRooms.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <p>대화 목록이 없습니다.</p>
          </div>
        ) : (
          chatRooms.map((room) => (
            <div
              key={room.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #ddd",
              }}
            >
              <div onClick={() => setSelectedRoom(room)}>
                <strong>{room.user.username}</strong>
              </div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteChat(room.id)}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>

      {/* 오른쪽: DM 창 또는 초기 메시지 화면 */}
      <div className="dm-view">
        {selectedRoom ? (
          <DMView
            room={selectedRoom}
            onSendMessage={handleSendMessage}
            onLeaveChat={handleLeaveChat}
          />
        ) : (
          <>
            <img
              src="/images/messages/messages01.png"
              alt="Messenger Icon"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <h2 style={{ marginBottom: "1px" }}>내 메시지</h2>
            <p style={{ color: "#888", marginTop: "2px" }}>
              친구나 그룹에 비공개 사진과 메시지를 보내보세요.
            </p>
            <button
              style={{
                backgroundColor: "#3399ff",
                color: "white",
                border: "none",
                padding: "7px 16px",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => setModalOpen(true)}
            >
              메시지 보내기
            </button>
            <button
              onClick={(e) => {
                wrapRef.current.classList.remove('wrap');
                wrapRef.current.classList.add('wrap2');
                btnRef.current.classList?.remove("defcss");
              }}
            >
              화면테스트
            </button>
          </>
        )}
      </div>
      <div className="defcss" ref={btnRef} style={{border:'1px solid black;'}}>
        test
      </div>

      {/* 모달 */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <NewMessageModal
            onClose={() => setModalOpen(false)}
            onStartChat={handleStartChat}
          />
        </div>
      )}
    </div>
  );
};

export default DMListPage;
