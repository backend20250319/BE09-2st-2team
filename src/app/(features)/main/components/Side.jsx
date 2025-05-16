// components/Sidebar.jsx
const Sidebar = ({ children }) => (
  <div
    style={{
      width: "319px",
      backgroundColor: "rgb(255,255,255)",
      padding: "0 0 0 64px",
    }}
  >
    {children}
  </div>
);

const SideContents = () => (
  <div
    style={{
      width: "319px",
      backgroundColor: "rgb(172, 203, 251)",
      height: "100%",
      marginTop: "36px",
    }}
  ></div>
);
export default Sidebar;
export { SideContents };
