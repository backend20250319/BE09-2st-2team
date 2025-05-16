// components/Sidebar.jsx
const Sidebar = ({ children }) => (
  <div
    style={{
      width: "319px",
      backgroundColor: "rgb(197, 61, 61)",
      padding: "0 0 0 64px",
    }}
  >
    {children}
  </div>
);

const SideContents = ({ children }) => (
  <div
    style={{
      width: "319px",
      backgroundColor: "rgb(172, 203, 251)",
      height: "100%",
    }}
  >
    {children}
  </div>
);

const SideMyProfile = () => <div style={{}}></div>;
const SideRecommend = () => <div></div>;
const SideFooter = () => <div></div>;

export default Sidebar;
export { SideContents };
export { SideMyProfile };
export { SideRecommend };
export { SideFooter };
