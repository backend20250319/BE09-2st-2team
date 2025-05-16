import React, { useState, useEffect, useRef } from "react";

const DMView = ({ room, onSendMessage, onLeaveChat }) => {
  const [messages, setMessages] = useState(room.messages || []);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(room.messages || []);
  }, [room]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;
    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "me",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    onSendMessage(room.id, inputValue);
    setInputValue("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* 상단 타이틀 + 나가기 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h3 style={{ margin: 0 }}>{room.user.username}님과의 대화</h3>
        <button
          onClick={onLeaveChat}
          style={{
            background: "none",
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "6px 12px",
            cursor: "pointer",
            color: "#888",
          }}
        >
          나가기
        </button>
      </div>

      {/* 메시지 목록 */}
      <div
        ref={messagesEndRef}
        style={{
          height: 400,
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 12,
          marginBottom: 12,
          backgroundColor: "#f9f9f9",
        }}
      >
        {messages.length === 0 && (
          <p style={{ color: "#888" }}>메시지가 없습니다.</p>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.sender === "me" ? "right" : "left",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: msg.sender === "me" ? "#3399ff" : "#eee",
                color: msg.sender === "me" ? "white" : "black",
                padding: "8px 12px",
                borderRadius: 20,
                maxWidth: "70%",
                wordBreak: "break-word",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* 입력창 (전송 버튼 삭제) */}
      <div>
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // 혹시 필요하면 기본 이벤트 차단
              handleSend();
            }
          }}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 20,
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
};

export default DMView;
