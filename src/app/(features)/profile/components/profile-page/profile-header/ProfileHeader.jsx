import React from "react";
import "./ProfileHeader.css";
import { RiLinkM } from "react-icons/ri";
import { TbSettingsFilled } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";

const ProfileHeader = ({ user }) => (
  <div className="profile-header">
    <div className="header-top">
      <div className="left-header">
        <img
          src={user.avatar}
          alt="프로필 사진"
          className="avatar"
          style={{ width: 150, height: 150 }}
        />
      </div>
      <span className="right-header">
        <div className="row1">
          <span className="user-name">{user.username}</span>
          <button>프로필 편집</button>
          <button>보관된 스토리 보기기</button>
          <span className="settings">
            <IoIosSettings size={30} />
          </span>
        </div>
        <ul className="user-details">
          <li className="post-cnt">
            게시물 <strong style={{ color: "black" }}>{user.posts}</strong>
          </li>
          <li className="follower-cnt">
            팔로워 <strong style={{ color: "black" }}>{user.followers}</strong>
          </li>
          <li className="following-cnt">
            팔로잉 <strong style={{ color: "black" }}>{user.following}</strong>
          </li>
        </ul>
        <div className="row3">
          <strong>{user.description}</strong>
          <p className="light-description">교육 연구 센터</p>
          <p className="normal-description">
            데이터 전문기업 (주)엔코아의 IT 교육브랜드
          </p>
          <p className="normal-description">-</p>
          <p className="normal-description">부트캠프 수강생 모집 중🙋🏻‍♀️</p>
          <a
            href="https://playdata.io/program_backend"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkM />
            <span className="link-url">bit.ly/playdata_io</span>
          </a>
        </div>
      </span>
    </div>
    <div className="highlight">
      <img
        src="\images\profile\highlight\highlight1.png"
        alt="취업후기"
        // onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <img
        src="\images\profile\highlight\highlight2.png"
        alt="부트캠프프"
        // onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <img
        src="\images\profile\highlight\highlight3.png"
        alt="채용연계"
        // onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>

    <br />
  </div>
);

export default ProfileHeader;
