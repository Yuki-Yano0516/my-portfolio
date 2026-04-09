import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Cursor from "@/components/ui/Cursor";
import RevealObserver from "@/components/ui/RevealObserver";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Yano. — Frontend Engineer",
  description: "フリーランスのフロントエンドエンジニア。React / Next.js を中心に、デザインと実装の両側からプロダクトをつくります。",
  openGraph: {
    title: "Yano. — Frontend Engineer",
    description: "フリーランスのフロントエンドエンジニア。",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Cursor />
        <Header />
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
