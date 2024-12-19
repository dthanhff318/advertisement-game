/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.APP_URL || "https://example.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000,
  additionalPaths: async () => {
    const gameList = [
      {
        loc: "block-blast",
        priority: 1.0,
      },
      {
        loc: "block-puzzle-master",
      },
      {
        loc: "blockbuster-puzzle",
      },
      {
        loc: "sand-trix",
      },
      {
        loc: "wood-block-journey",
      },
      {
        loc: "block-champ",
      },
      {
        loc: "block-match-8x8",
      },
      {
        loc: "wood-block-tap-away",
      },
      {
        loc: "elemental-blockade",
      },
      {
        loc: "choco-blocks",
      },
    ];
    return gameList
      .map((e) => ({
        loc: `/game/${e.loc}`,
        lastmod: new Date().toISOString(),
        priority: e.priority ?? 0.7,
      }))
      .concat([
        { loc: "/game", lastmod: new Date().toISOString(), priority: 1.0 }, // Main game
      ]);
  },
};
