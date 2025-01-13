import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Head from "next/head";

const kanitFont = Kanit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Stack",
  description: "Amazing free game to play",
  keywords: "free games, online games, play games",
  icons: {
    icon: "/images/block-blast.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noodp,index,follow" />
        <meta
          name="description"
          content="Block Blast is the ultimate puzzle game for fun and strategy lovers! Match blocks, clear rows, and challenge your mind in this exciting, free-to-play game online."
        />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Block Blast - Puzzle Game",
              description:
                "Block Blast is the ultimate puzzle game for fun and strategy lovers. Match blocks, clear rows, and challenge your mind in this exciting, free-to-play game online.",
              url: process.env.APP_URL,
              mainEntityOfPage: process.env.APP_URL,
              image: "https://blockblastonline.co/images/block-blast.jpeg",
            }),
          }}
        />
      </Head>
      <body className={`${kanitFont.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
