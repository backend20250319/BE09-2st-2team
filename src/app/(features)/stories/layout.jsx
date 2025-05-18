import ClientWrapper from "./ClientWrapper";
import "./style.css";

export const metadata = {
  title: "스토리 보기",
};

export default function StoryLayout({ children }) {
  return (
    <div>
      <ClientWrapper />
      {children}
    </div>
  );
}
