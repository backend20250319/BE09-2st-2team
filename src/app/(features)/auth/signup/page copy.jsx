"use client";

import { useState } from "react";

export default function P() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const isSignupEnabled =
    emailOrPhone.trim() !== "" &&
    password.trim() !== "" &&
    fullName.trim() !== "" &&
    username.trim() !== "";

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const boxStyle = {
    backgroundColor: "white",
    height: "659px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
  };

  const logoStyle = {
    width: 175,
    height: 51,
    paddingTop: "40px",
  };

  const inputStyle = {
    width: "75%",
    height: "36px",
    marginBottom: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "12px",
  };

  const buttonStyle = {
    width: "75%",
    height: "33px",
    backgroundColor: isSignupEnabled ? "#0095F6" : "#b2dffc",
    color: isSignupEnabled ? "white" : "#eee",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    cursor: isSignupEnabled ? "pointer" : "not-allowed",
    transition: "background-color 0.3s ease",
  };

  const dividerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
  };

  const lineStyle = {
    width: "30%",
    height: "1px",
    backgroundColor: "#ccc",
  };

  const orTextStyle = {
    margin: "0 10px",
    fontSize: "13px",
    fontWeight: "bold",
    color: "#888",
  };

  const infoTextStyle = {
    fontSize: "12px",
    color: "#888",
    textAlign: "left",
    marginTop: "10px",
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const bottomTextStyle = {
    marginTop: "20px",
    fontSize: "14px",
  };

  const linkStyle = {
    color: "#3897f0",
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignupEnabled) return;

    alert("회원가입 성공!");
    // 여기에 API 호출 또는 라우팅 추가 가능
  };

  // 플로팅 라벨 스타일 객체
  const floatingLabelStyle = (active) => ({
    position: "absolute",
    left: 6,
    top: active ? 1 : 9, // 12 -> 6으로 올려서 placeholder와 너무 겹치지 않도록
    fontSize: active ? 10 : 12,
    color: "#8e8e8e",
    backgroundColor: "#fafafa",
    padding: "0 4px",
    pointerEvents: "none",
    transition: "0.2s ease all",
  });

  // input 컨테이너 스타일
  const floatingInputStyle = {
    position: "relative",
    width: "100%",
    marginTop: 12,
  };

  // const inputStyle = {
  //   width: "100%",
  //   height: 36, // ✅ 고정 높이
  //   padding: "12px 8px 0px", // ✅ 상단은 줄이고, 하단은 늘림 → 텍스트가 아래로
  //   fontSize: 12,
  //   borderRadius: 4,
  //   border: "1px solid #dbdbdb",
  //   backgroundColor: "#fafafa",
  //   boxSizing: "border-box",
  //   outline: "none",
  // };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img
          src="/images/auth/instalogo.png"
          alt="인스타 로고"
          style={logoStyle}
        />

        <form onSubmit={handleSubmit}>
          <p
            style={{ color: "#666", marginBottom: "20px", fontWeight: "bold" }}
          >
            친구들의 사진과 동영상을 보려면 가입
            <br />
            하세요.
          </p>

          <button
            type="button"
            style={{
              ...buttonStyle,
              marginBottom: "15px",
              backgroundColor: "#4267B2",
              color: "white",
              cursor: "pointer",
            }}
          >
            Facebook으로 로그인
          </button>

          <div style={dividerStyle}>
            <div style={lineStyle}></div>
            <span style={orTextStyle}>또는</span>
            <div style={lineStyle}></div>
          </div>

          <input
            type="text"
            placeholder="휴대폰 번호 또는 이메일 주소"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="성명"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />

          <p style={infoTextStyle}>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다. <span style={linkStyle}>더 알아보기</span>
          </p>

          <button
            type="submit"
            style={{ ...buttonStyle, marginTop: "10px" }}
            disabled={!isSignupEnabled}
          >
            가입
          </button>
        </form>

        <div style={bottomTextStyle}>
          계정이 있으신가요? <span style={linkStyle}>로그인</span>
        </div>
      </div>
    </div>
  );
}
