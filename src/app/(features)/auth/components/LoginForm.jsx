"use client";

import { useState } from "react";
import Image from "next/image"; // next/image 사용 시

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "270px",
        margin: "0 auto",
      }}
    >
      {/* 아이디 입력 */}
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        style={inputStyle}
      />

      {/* 비밀번호 입력 */}
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        style={{ ...inputStyle, marginTop: "6px" }}
      />

      {/* 로그인 버튼 */}
      <button
        type="submit"
        style={{
          marginTop: "12px",
          width: "100%",
          padding: "8px 0",
          backgroundColor: "#0095f6",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        로그인
      </button>

      {/* 또는 구분선 */}
      <div
        style={{
          margin: "16px 0",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <hr style={{ flex: 1, borderTop: "1px solid #dbdbdb" }} />
        <span
          style={{
            margin: "0 10px",
            color: "#8e8e8e",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          또는
        </span>
        <hr style={{ flex: 1, borderTop: "1px solid #dbdbdb" }} />
      </div>

      {/* 페이스북 로그인 */}
      <button
        type="button"
        style={{
          paddingTop: "5px",
          background: "none",
          border: "none",
          color: "#3579EA",
          fontWeight: "bold",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img
          src="/images/auth/facebooklogo.png"
          alt="Facebook 로그인"
          style={{ width: "16px", height: "16px", marginRight: "8px" }}
        />
        Facebook으로 로그인
      </button>

      {/* 비밀번호 잊음 */}
      <a
        href="#"
        style={{
          marginTop: "25px",
          fontSize: "14px",
          color: "#00376b",
          textDecoration: "none",
        }}
      >
        비밀번호를 잊으셨나요?
      </a>
    </form>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "12px",
  borderRadius: "4px",
  border: "1px solid #dbdbdb",
  backgroundColor: "#fafafa",
  boxSizing: "border-box", // ✅ 이거 추가!
};
