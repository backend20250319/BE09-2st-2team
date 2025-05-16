import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    marginTop: "32px",
  };

  const leftBoxStyle = {
    width: 585,
    height: 496,
  };

  const imageStyle = {
    width: "550px",
    height: "450px",
  };

  const rightBoxStyle = {
    width: "350px",
    height: "450px",
    // backgroundColor: "lightgray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const logoStyle = {
    width: 175,
    height: 51,
  };

  const formContainerStyle = {
    width: "100%",
    height: "276px",
    marginTop: "24px",
    marginBottom: "10px",
    padding: "10px 0px",
    // backgroundColor: "green",
  };

  const registerTextStyle = {
    width: 350,
    height: 41,
    padding: "10px 0px",
    textAlign: "center",
  };

  const linkStyle = {
    color: "#0095f6",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={leftBoxStyle}>
        <img
          src="/images/auth/loginimage.png"
          alt="로그인 사진"
          style={imageStyle}
        />
      </div>

      <div style={rightBoxStyle}>
        <img
          src="/images/auth/instalogo.png"
          alt="인스타 로고"
          style={logoStyle}
        />

        <div style={formContainerStyle}>
          <LoginForm />
        </div>

        <div style={registerTextStyle}>
          <p style={{ fontSize: 14 }}>
            계정이 없으신가요?{" "}
            <Link href="/auth/signup" style={linkStyle}>
              가입하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
