// pages/page.jsx
import React from "react";
import Navbar from "../components/NavBar";
import StoryBar, { Stories } from "../components/Story";
import FeedPage, { FeedTray, Feed } from "../components/Feed";
import SideBar, {
  SideContents,
  SideMyProfile,
  SideRecommend,
  SideFooter,
} from "../components/Side";
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
            <FeedPage>
              <FeedTray>
                <Feed />
              </FeedTray>
            </FeedPage>
          </div>
          <SideBar>
            <SideContents>
              <SideMyProfile />
              <SideRecommend />
              <SideFooter />
            </SideContents>
          </SideBar>
        </div>
      </div>
    </>
  );
};

export default MainPage;
