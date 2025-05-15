import Footer from "../components/Footer";

export const metadata = {
  title: "My Next.js App",
  description: "Next.js 13 App Directory 예제",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
