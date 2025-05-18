"use client";

import { useState } from "react";
import "./style.css";

export default function SearchComponent() {
  const profiles = [
    {
      img: "/images/search/profile1.png",
      userName: "qwerty",
      fullName: "qwerty",
    },
    {
      img: "/images/search/profile2.png",
      userName: "bbang_ok_luv",
      fullName: "빵빵이와 옥지의 럽스타그램👩‍❤️‍💋‍👨",
    },
    {
      img: "/images/search/profile3.png",
      userName: "goyounjung",
      fullName: "고윤정",
    },
    {
      img: "/images/search/profile4.png",
      userName: "bbang_2",
      fullName: "빵빵이",
    },
    {
      img: "/images/search/profile5.png",
      userName: "okz",
      fullName: "옥찌",
    },
    {
      img: "/images/search/profile6.png",
      userName: "5kjinae",
      fullName: "옥지네",
    },
    {
      img: "/images/search/profile7.png",
      userName: "travel.dreamer",
      fullName: "여행하는 꿈꾸는 자",
    },
    {
      img: "/images/search/profile8.png",
      userName: "hohohohoho",
      fullName: "예술혼",
    },
    {
      img: "/images/search/profile9.png",
      userName: "nightowl.creative",
      fullName: "밤올빼미",
    },
    {
      img: "/images/search/profile10.png",
      userName: "pixel.perfect",
      fullName: "픽셀 마스터",
    },
  ];

  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // if (value && !history.includes(value)) {
    //   setHistory([value, ...history]);
    // }
  };

  // 클릭된 프로필을 최근 검색에 추가하는 함수
  const handleProfileClick = (profile) => {
    console.log(profile.userName);
    // history에 동일 userName 프로필이 없으면 추가
    if (!history.some((p) => p.userName === profile.userName)) {
      setHistory([profile, ...history]);
    }
  };

  // 검색어에 맞는 프로필 필터링 (userName or fullName 포함하면 표시)
  const filteredProfiles = profiles.filter(
    ({ userName, fullName }) =>
      query &&
      (userName.toLowerCase().includes(query.toLowerCase()) ||
        fullName.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="main-box">
      <div className="search-box">
        <h2 className="search-title">검색</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="검색"
            value={query}
            onChange={handleChange}
            className="search-input"
          />
        </div>
        <hr />
      </div>

      <div className="search-list">
        {!query && (
          <div className="recent-search">
            <h4>최근 검색 항목</h4>
            {history.length > 0 && (
              <span onClick={() => setHistory([])}>모두 지우기</span>
            )}
          </div>
        )}
        {query ? (
          filteredProfiles.length > 0 ? (
            <div className="profile-box">
              {filteredProfiles.map((profile, idx) => (
                <div
                  key={idx}
                  className="profile"
                  onClick={() => {
                    handleProfileClick(profile);
                  }}
                >
                  <img
                    className="profile-img"
                    src={profile.img}
                    alt={`${profile.userName} 프로필사진`}
                  />
                  <div className="profile-info">
                    <div>
                      <span className="user-name">{profile.userName}</span>
                    </div>
                    <div>
                      <span className="full-name">{profile.fullName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-history-box">
              <p className="no-history">검색 결과가 없습니다.</p>
            </div>
          )
        ) : history.length > 0 ? (
          <div className="profile-box">
            {history.map((profile, idx) => (
              <div
                key={idx}
                className="profile"
                onClick={() => {
                  handleProfileClick(profile);
                }}
              >
                <img
                  className="profile-img"
                  src={profile.img}
                  alt={`${profile.userName} 프로필사진`}
                />
                <div className="profile-info">
                  <div>
                    <span className="user-name">{profile.userName}</span>
                  </div>
                  <div>
                    <span className="full-name">{profile.fullName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-history-box">
            <p className="no-history">최근 검색 항목이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
