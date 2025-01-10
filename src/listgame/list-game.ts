/* eslint-disable @typescript-eslint/no-explicit-any */
import descriptionGame from "@/listgame/description-game";

export type TGame = {
  id: number;
  name: string;
  linkgame: string;
  embedFile?: string;
  instructions?: any;
  descripTion?: TDescription[];
  img?: string;
  slug: string;
  listTag?: any;
};

export type TDescription = {
  title: string;
  descSub?: TDescSub[];
};

export type TDescSub = {
  title2?: string;
  chilren: string[];
};

const ListGame: TGame[] = [
  {
    id: 1,
    name: "Block Blast",
    linkgame: "https://reunbozdo.github.io/",
    descripTion: descriptionGame.BlockBlast,
    img: "/img-game/block-blast.jpeg",
    slug: "block-blast",
    listTag: ["block games", "puzzle games"],
    embedFile: "/embed/block-blast.embed",
  },
  {
    id: 2,
    name: "Block Puzzle Master",
    linkgame:
      "https://games.crazygames.com/en_US/block-puzzle-master/index.html?v=1.299",
    instructions: descriptionGame,
    descripTion: descriptionGame.BlockPuzzleMaster,
    img: "/img-game/block-puzzle-master.jpeg",
    slug: "block-puzzle-master",
    listTag: ["block games", "puzzle games", "tetris games"],
  },
  {
    id: 3,
    name: "BlockBuster Puzzle",
    linkgame:
      "https://html5.gamedistribution.com/b2cc0cd4b40a40dd84b8d452e7c5d6f8/?gd_sdk_referrer_url=https://block-blast.io/blockbuster-puzzle",
    descripTion: descriptionGame.BlockbusterPuzzle,
    img: "/img-game/blockBuster-puzzle.jpeg",
    slug: "blockbuster-puzzle",
    listTag: ["block games", "puzzle games", "tetris games", "hot game"],
  },
  {
    id: 4,
    name: "SandTrix",
    linkgame: "https://games.crazygames.com/en_US/sandtrix/index.html?v=1.299",
    descripTion: descriptionGame.Sandtrix,
    img: "/img-game/sand-trix.jpeg",
    slug: "sand-trix",
    listTag: ["block games", "puzzle games", "tetris games"],
  },
  {
    id: 5,
    name: "Wood Block Journey",
    linkgame:
      "https://games.crazygames.com/en_US/wood-block-journey/index.html?v=1.299",
    descripTion: descriptionGame.WoodBlockJourney,
    img: "/img-game/wood-block-journey.png",
    slug: "wood-block-journey",
    listTag: ["block games", "puzzle games", "hot game"],
  },
  {
    id: 6,
    name: "Block Champ",
    linkgame:
      "https://html5.gamedistribution.com/0d8acf7c95dc4c02b9d881f769a5c0b1/",
    descripTion: descriptionGame.BlockChamp,
    img: "/img-game/block-champ.png",
    slug: "block-champ",
    listTag: ["block games", "puzzle games", "new game"],
  },
  {
    id: 7,
    name: "BLOCK MATCH 8x8",
    linkgame:
      "https://html5.gamedistribution.com/d0cdbaed8d5445b1b9a64b970c90ef2a/",
    descripTion: descriptionGame.BlockBlast,
    img: "/img-game/block-match-8x8.jpeg",
    slug: "block-match-8x8",
    listTag: ["block games", "puzzle games", "new game", "hot game"],
  },
  {
    id: 8,
    name: "Wood Block Tap Away",
    linkgame:
      "https://html5.gamedistribution.com/991c85e777824b43a46422c9f2531764/?gd_sdk_referrer_url=https://block-blast.io/wood-block-tap-away",
    descripTion: descriptionGame.WoodBlockTapAway,
    img: "/img-game/wood-block-tap-away.png",
    slug: "wood-block-tap-away",
    listTag: ["block games", "puzzle games"],
  },
  {
    id: 9,
    name: "Elemental Blockade",
    linkgame: "https://html-classic.itch.zone/html/11981061/index.html",
    descripTion: descriptionGame.ElementalBlockade,
    img: "/img-game/Elemental-blockade.png",
    slug: "elemental-blockade",
    listTag: ["block games", "puzzle games"],
  },
  {
    id: 10,
    name: "Choco Blocks",
    descripTion: descriptionGame.ChocoBlocks,
    linkgame:
      "https://html5.gamedistribution.com/330c466258f941d39efc335aef7a2869/?gd_sdk_referrer_url=https://block-blast.io/choco-blocks",
    img: "/img-game/choco-blocks.png",
    slug: "choco-blocks",
    listTag: ["block games", "puzzle games"],
  },
];

export default ListGame;
