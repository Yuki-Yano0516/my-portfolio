import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Cursor from "@/components/ui/Cursor";
import RevealObserver from "@/components/ui/RevealObserver";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yano. — Frontend Engineer",
    template: "%s | Yano.",
  },
  description: "フリーランスのフロントエンドエンジニア。React / Next.js を中心に、デザインと実装の両側からプロダクトをつくります。",
  openGraph: {
    title: "Yano. — Frontend Engineer",
    description: "フリーランスのフロントエンドエンジニア。React / Next.js を中心に、デザインと実装の両側からプロダクトをつくります。",
    url: siteUrl,
    siteName: "Yano.",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yano. — Frontend Engineer",
    description: "フリーランスのフロントエンドエンジニア。React / Next.js を中心に、デザインと実装の両側からプロダクトをつくります。",
  },
  alternates: {
    canonical: siteUrl,
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
