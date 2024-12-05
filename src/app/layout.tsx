import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const kanitFont = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Stack",
  description: "Amazing free game to play",
  keywords: "free games, online games, play games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/block-blast.jpeg" />
      <body className={`${kanitFont.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
