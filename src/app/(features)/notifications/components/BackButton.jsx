// components/BackButton.jsx
"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/notifications/noti");
  };

  return (
    <>
      <img
        src="/images/noti/arrowleft.png"
        style={{
          width: "22px",
          borderRadius: "50%",
          marginRight: "12px",
          height: "100%",
          marginTop: "18px",
        }}
        onClick={handleClick}
      />
    </>
  );
}
