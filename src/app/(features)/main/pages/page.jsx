// pages/page.jsx
import React from "react";
import Navbar from "../components/NavBar";
import StoryBar from "../components/StoryBar";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.feedSection}>
            <StoryBar />
            <Feed />
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default MainPage;
