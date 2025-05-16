// components/StoryBar.jsx
const StoryBar = ({ children }) => (
  <div
    style={{
      colorScheme: "light",
      height: "100px",
      backgroundColor: "rgb(255,255,255)",
      border: "1px solid rgb(255,255,255)",
      marginBottom: "24px",
      direction: "ltr",
      fontSize: "14px",
      width: "630px",
    }}
  >
    {children}
  </div>
);

const Stories = () => (
  <div
    style={{
      alignItems: "stretch",
      color: "rgb(0,0,0)",
      margin: "8px 0px 8px 0px",
      backgroundColor: "rgb(255, 255, 255)",
      fontSize: "14px",
      flexDirection: "row",
      height: "84px",
    }}
  >
    Stories
  </div>
);
export default StoryBar;
export { Stories };
