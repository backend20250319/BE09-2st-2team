"use client";

import { useState } from "react";
import NotificationPanel from "../components/NotificationPanel";

export default function NotificationsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* 하트 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1100,
          background: "none",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        🔔
      </button>
      <NotificationPanel isOpen={isOpen} />
      <div style={{ padding: "40px" }}>
        <h1>배경 콘텐츠 (피드 등)</h1>
        <img src="/images/story/story1.jpg" width="300" />
      </div>
    </div>
  );
}
