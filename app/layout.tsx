import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies", // 템플릿 %s -> 문자열이 들어간다.
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

// metadata는 병합된다.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
