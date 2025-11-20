import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classby - 课堂录音与 AI 笔记助手",
  description: "录音、转写、AI 提炼要点，一站式课堂效率工具。智能提取课程概要、作业任务和详细笔记，让学习更高效。",
  keywords: "录音,笔记,AI,转写,云同步,学习,课堂,速记,Classby",
  authors: [{ name: "Classby" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Classby - 课堂录音与 AI 笔记助手",
    description: "录音、转写、AI 提炼要点，一站式课堂效率工具",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
