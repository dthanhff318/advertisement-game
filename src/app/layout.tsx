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
      <head>
        <meta name="title" content="Block Blast" />
        <meta name="robots" content="noodp,index,follow" />
        <meta
          name="description"
          content="Block Blast is the ultimate puzzle game for fun and strategy lovers! Match blocks, clear rows, and challenge your mind in this exciting, free-to-play game online."
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        <link rel="icon" href="/images/block-blast.jpeg" />
      </head>
      <body className={`${kanitFont.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
