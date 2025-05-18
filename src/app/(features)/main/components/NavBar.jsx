// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "홈", icon: "main2_3.svg", selectedIcon: "main1_3.svg" },
  { label: "검색", icon: "main1_8.svg", selectedIcon: "main2_8.svg" },
  { label: "탐색 탭", icon: "main1_2.svg", selectedIcon: "main2_2.svg" },
  { label: "릴스", icon: "main1_7.svg", selectedIcon: "main2_7.svg" },
  { label: "메시지", icon: "main1_4.svg", selectedIcon: "main2_4.svg" },
  { label: "알림", icon: "main1_6.svg", selectedIcon: "main2_6.svg" },
  { label: "만들기", icon: "main1_5.svg", selectedIcon: "main2_5.svg" },
  {
    label: "프로필",
    icon: "main1_1.jpg",
    selectedIcon: "main1_1.jpg",
    isProfile: true,
  },
  { label: "Threads", icon: "main1_10.svg", selectedIcon: "main1_10.svg" },
  { label: "더 보기", icon: "main1_9.svg", selectedIcon: "main2_9.svg" },
];

const Navbar = () => {
  const [active, setActive] = useState("홈");

  const NavButton = ({ item }) => {
    const isActive = active === item.label;

    return (
      <button
        onClick={() => setActive(item.label)}
        style={{
          background: "none",
          border: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s, color 0.2s",
          fontWeight: isActive ? "700" : "400",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#f2f2f2";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "black";
        }}
      >
        <img
          src={`/images/main/${isActive ? item.selectedIcon : item.icon}`}
          width={24}
          height={24}
          style={
            item.isProfile ? { borderRadius: "50%", objectFit: "cover" } : {}
          }
        />
        {item.label}
      </button>
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "244px",
        height: "100dvh",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        borderRight: "1px solid #dbdbdb",
        display: "flex",
        flexDirection: "column",
        padding: "8px 12px 20px 12px",
      }}
    >
      <Link href="/">
        <img
          src="/images/main/main0.png"
          alt="Instagram 로고"
          style={{
            width: "103px",
            height: "auto",
            padding: "20px 0px 0px 10px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        />
      </Link>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingLeft: "2px",
          }}
        >
          {navItems.slice(0, 8).map((item, idx) => (
            <NavButton key={idx} item={item} />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            paddingLeft: "2px",
          }}
        >
          {navItems.slice(8).map((item, idx) => (
            <NavButton key={idx} item={item} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
