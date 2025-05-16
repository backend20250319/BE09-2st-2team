"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const isValidPhone = (value) =>
    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/.test(value);

  const handleEmailOrPhoneBlur = () => {
    setFocusEmailOrPhone(false);

    const value = emailOrPhone.trim();

    console.log(value);

    // 숫자, +, - 만 포함되어 있는지 검사해서 전화번호 여부 판단
    const isPhoneInput = /^[\d+\-]+$/.test(value);

    if (isPhoneInput) {
      // 휴대폰 번호 검사
      if (!isValidPhone(value)) {
        setErrorMessage(
          "휴대폰 번호가 정확하지 않습니다. 국가 번호를 포함하여 전체 전화번호를 입력해주세요."
        );
        return; // 여기서 return 하니까 밑에 setErrorMessage("") 안 호출됨
      }
    } else {
      // 이메일 검사
      if (!isValidEmail(value)) {
        setErrorMessage("Enter a valid email address.");
        return; // 여기서 return 하니까 밑에 setErrorMessage("") 안 호출됨
      }
    }

    // 둘 다 통과하면 에러 메시지 초기화
    setErrorMessage("");
    return true;
  };

  const router = useRouter();

  //////////// Signup  ///////////////////////////////////
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // 포커스 상태 관리 (선택사항, 스타일 좀 더 다이나믹하게)
  const [focusEmailOrPhone, setFocusEmailOrPhone] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusFullName, setFocusFullName] = useState(false);
  const [focusUsername, setFocusUsername] = useState(false);

  // 에러 메시지 상태 추가
  const [errorMessage, setErrorMessage] = useState("");

  const isSignupEnabled =
    emailOrPhone.trim() !== "" &&
    password.trim() !== "" &&
    fullName.trim() !== "" &&
    username.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSignupEnabled) return;

    setErrorMessage("");
    router.push("/auth/login");
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

  const inputStyle = {
    width: "100%",
    height: 36, // ✅ 고정 높이
    padding: "12px 8px 0px", // ✅ 상단은 줄이고, 하단은 늘림 → 텍스트가 아래로
    fontSize: 12,
    borderRadius: 4,
    border: "1px solid #dbdbdb",
    backgroundColor: "#fafafa",
    boxSizing: "border-box",
    outline: "none",
    paddingRight: "36px", // 아이콘 공간 확보
  };

  const containerStyle = {
    display: "flex",
    marginBottom: "44px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const boxStyle = {
    backgroundColor: "white",
    height: "560px",
    border: "1px solid #dbdbdb", // ✅ 테두리 추가
    width: "350px",
    textAlign: "center",
  };

  const logoStyle = {
    width: 175,
    height: 51,
    paddingTop: "35px",
  };

  const buttonStyle = {
    width: "100%",
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

  const floatingInputStyle = {
    position: "relative",
    width: "100%",
    marginTop: 8,
  };

  const infoTextStyle = {
    fontSize: "12px",
    color: "#888",
    textAlign: "center",
    marginTop: "10px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const linkStyle = {
    color: "#3897f0",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <img
          src="/images/auth/instalogo.png"
          alt="인스타 로고"
          style={logoStyle}
        />

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
          <p style={{ color: "#737373", margin: "9px 0", fontWeight: "bold" }}>
            친구들의 사진과 동영상을 보려면 가입하
            <br />
            세요.
          </p>

          {/* 페이스북 버튼 */}
          <button
            type="button"
            style={{
              ...buttonStyle,
              marginBottom: "5px",
              backgroundColor: "#0095f6",
              color: "white",
              cursor: "pointer",
              display: "flex", // flexbox 사용
              alignItems: "center", // 수직 가운데 정렬
              justifyContent: "center", // (선택) 가운데 정렬
            }}
          >
            <img
              src="/images/auth/facebookicon.png"
              alt="Facebook 로그인"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "6px",
              }}
            />
            Facebook으로 로그인
          </button>

          {/* 또는 구분선 */}
          <div
            style={{
              margin: "10px 0",
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

          {/* emailOrPhone */}
          <div style={floatingInputStyle}>
            <input
              id="emailOrPhone"
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              onFocus={() => setFocusEmailOrPhone(true)}
              onBlur={() => handleEmailOrPhoneBlur()}
              required
              autoComplete="emailOrPhone"
              style={{
                ...inputStyle,
                border:
                  errorMessage !== "" ? "1px solid red" : "1px solid #dbdbdb",
              }}
              placeholder=" " // placeholder 공백으로 둬야 :placeholder-shown 효과 회피 가능
            />
            <label
              htmlFor="emailOrPhone"
              style={floatingLabelStyle(
                focusEmailOrPhone || emailOrPhone !== ""
              )}
            >
              휴대폰 번호 또는 이메일 주소
            </label>
            {emailOrPhone && (
              <img
                src="/images/auth/erroricon.png" // 아이콘 이미지 경로
                alt="clear"
                onClick={() => setEmailOrPhone("")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "22px",
                  height: "22px",
                  cursor: "pointer",
                  opacity: 0.6,
                }}
              />
            )}
          </div>
          {errorMessage && (
            <p
              style={{
                color: "#ed4956",
                fontSize: "12px",
                marginTop: "4px",
                marginLeft: "8px",
                textAlign: "left",
                width: "100%", // 중요!
              }}
            >
              {errorMessage}
            </p>
          )}

          {/* password */}
          <div style={floatingInputStyle}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusPassword(true)}
              onBlur={() => setFocusPassword(false)}
              required
              autoComplete="current-password"
              style={{ ...inputStyle, paddingRight: "50px" }}
              placeholder=" "
            />
            <label
              htmlFor="password"
              style={floatingLabelStyle(focusPassword || password !== "")}
            >
              비밀번호
            </label>

            {/* 표시 / 숨기기 버튼 - 입력값 있을 때만 보임 */}
            {password !== "" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: 14,
                  padding: 0,
                  userSelect: "none",
                }}
              >
                {showPassword ? "숨기기" : "비밀번호 표시"}
              </button>
            )}
          </div>

          {/* fullName */}
          <div style={floatingInputStyle}>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onFocus={() => setFocusFullName(true)}
              onBlur={() => setFocusFullName(false)}
              required
              autoComplete="fullName"
              style={inputStyle}
              placeholder=" " // placeholder 공백으로 둬야 :placeholder-shown 효과 회피 가능
            />
            <label
              htmlFor="fullName"
              style={floatingLabelStyle(focusFullName || fullName !== "")}
            >
              성명
            </label>
          </div>

          {/* username */}
          <div style={floatingInputStyle}>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setFocusUsername(true)}
              onBlur={() => setFocusUsername(false)}
              required
              autoComplete="username"
              style={inputStyle}
              placeholder=" " // placeholder 공백으로 둬야 :placeholder-shown 효과 회피 가능
            />
            <label
              htmlFor="username"
              style={floatingLabelStyle(focusUsername || username !== "")}
            >
              사용자 이름
            </label>
          </div>

          <p style={infoTextStyle}>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다. <span style={linkStyle}>더 알아보기</span>
          </p>

          {/* 가입 버튼 */}
          <button
            type="submit"
            disabled={!isSignupEnabled}
            style={{
              marginTop: "12px",
              width: "100%",
              padding: "8px 0",
              backgroundColor: isSignupEnabled ? "#0095f6" : "#b2dffc",
              color: isSignupEnabled ? "#fff" : "#eee",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: isSignupEnabled ? "pointer" : "not-allowed",
              transition: "background-color 0.3s ease",
            }}
          >
            가입
          </button>
        </form>
      </div>
      <div
        style={{
          ...boxStyle,
          height: "63px",
          marginTop: "10px",
          padding: "10px 0",
          display: "flex",
          flexDirection: "column", // 세로 정렬!
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
          border: "1px solid #dbdbdb", // boxShadow 대신 테두리만
          boxShadow: "none", // 쉐도우 제거
        }}
      >
        <div>계정이 있으신가요?</div>
        <div
          style={{
            color: "#0095f6",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          로그인
        </div>
      </div>
    </div>
  );
}
