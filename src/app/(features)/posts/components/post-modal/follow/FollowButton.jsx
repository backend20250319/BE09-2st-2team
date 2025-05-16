import React, { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const FollowButton = () => {
  const [isLoadingFollow, setIsLoadingFollow] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = () => {
    setIsLoadingFollow(true);
    setTimeout(() => {
      setIsLoadingFollow(false);
      setIsFollowed(true);
    }, 4000000); // 4초 후 완료 처리
  };

  if (isFollowed) return null; // 완료되면 컴포넌트 자체 사라짐

  if (isLoadingFollow) {
    return (
      <div
        style={{
          width: "100px",
          height: "36px",
          position: "relative",
        }}
      >
        <FadeLoader
          color="#000"
          loading={true}
          cssOverride={{
            position: "absolute", // 절대 위치 지정
            top: "70%", // 부모 높이 기준 50%
            left: "60%",
            transform: "translate(-50%, -50%) scale(0.3)",
            transformOrigin: "center center",
          }}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }

  // 로딩이 아닐 때 버튼 보여주기
  return (
    <div style={{ width: "100px", height: "36px" }}>
      <button
        className="follow-text-button"
        onClick={handleClick}
        style={{
          width: "100%",
          height: "100%",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        팔로우
      </button>
    </div>
  );
};

export default FollowButton;
