import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "Shatel Landing",
  description: "Implement Shatel Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
