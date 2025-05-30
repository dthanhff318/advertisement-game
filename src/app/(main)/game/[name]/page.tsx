import GameIframe from "@/app/(main)/game/components/game-iframe";
import ListGame from "@/listgame/list-game";
import Head from "next/head";

const GameDetail = ({ params }: { params: { name: string } }) => {
  return (
    <>
      <Head>
        <title>{params.name} - Ultimate Puzzle Game</title>
        <meta
          name="description"
          content={`${params.name} is the ultimate puzzle game for fun and strategy lovers! Match blocks, clear rows, and challenge your mind in this exciting, free-to-play game online.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`${params.name} - Ultimate Puzzle Game`}
        />
        <meta
          property="og:description"
          content={`${params.name} is the ultimate puzzle game for fun and strategy lovers!`}
        />
        <meta
          property="og:url"
          content={`https://yourdomain.com/game/${params.name
            .toLowerCase()
            .replace(" ", "-")}`}
        />
        <meta
          property="og:image"
          content="https://blockblastonline.co/images/block-blast.jpeg"
        />
        {/* Schema Game - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Game",
              name: params.name,
              url: `https://blockblastonline.co/game/${params.name
                .toLowerCase()
                .replace(" ", "-")}`,
              image: "https://blockblastonline.co/images/block-blast.jpeg",
              description: `${params.name} is the ultimate puzzle game for fun and strategy lovers! Match blocks, clear rows, and challenge your mind in this exciting, free-to-play game online.`,
              mainEntityOfPage: `https://blockblastonline.co/game/${params.name
                .toLowerCase()
                .replace(" ", "-")}`,
              genre: "Puzzle",
              publisher: {
                "@type": "Organization",
                name: "Your Company Name",
              },
              offers: {
                "@type": "Offer",
                url: `https://blockblastonline.co/game/${params.name
                  .toLowerCase()
                  .replace(" ", "-")}`,
                priceCurrency: "USD",
                price: "0",
                priceValidUntil: "2024-12-31",
              },
              sameAs: `https://blockblastonline.co/game/${params.name
                .toLowerCase()
                .replace(" ", "-")}`,
            }),
          }}
        />
        {/* <link rel="canonical" href="https://example.com/" /> */}
      </Head>
      <GameIframe />
    </>
  );
};

export default GameDetail;

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}) {
  const gameSlug = params.name;
  const findGame = ListGame.find((e) => e.slug === gameSlug);
  return {
    title: `${findGame?.name ?? "Block Blast"} - Ultimate Puzzle Game`,
    description: `${
      findGame?.name ?? "Block Blast"
    } is the ultimate puzzle game for fun and strategy lovers!`,
    openGraph: {
      title: `${findGame?.name ?? "Block Blast"} - Ultimate Puzzle Game`,
      description: `${
        findGame?.name ?? "Block Blast"
      } is the ultimate puzzle game for fun and strategy lovers!`,
      url: `https://blockblastonline.co/game/${
        findGame?.name ?? "Block Blast"
      }`,
      image: `https://blockblastonline.co/images/${
        findGame?.name ?? "Block Blast"
      }.jpeg`,
    },
  };
}
