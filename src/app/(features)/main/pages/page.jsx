// pages/page.jsx
import React from "react";
import Navbar from "../components/NavBar";
import StoryBar from "../components/Story";
import { Stories } from "../components/Story";
import Feed from "../components/Feed";
import SideBar from "../components/Side";
import { SideContents } from "../components/Side";
import styles from "../styles/MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <StoryBar>
              <Stories></Stories>
            </StoryBar>
            <Feed />
          </div>
          <SideBar>
            <SideContents />
          </SideBar>
        </div>
      </div>
    </>
  );
};

export default MainPage;
