/* eslint-disable @typescript-eslint/no-explicit-any */
import descriptionGame from "@/listgame/description-game";

export type TGame = {
  id: number;
  name: string;
  linkgame: string;
  embedFile?: string;
  instructions?: any;
  descripTion?: any;
  img?: string;
};

const ListGame: TGame[] = [
  {
    id: 1,
    name: "Block Blast",
    linkgame: "https://reunbozdo.github.io/",
    descripTion: descriptionGame.BlockBlast,
    img: "/img-game/block-blast.jpeg",
  },
  {
    id: 2,
    name: "Block Puzzle Master",
    linkgame:
      "https://games.crazygames.com/en_US/block-puzzle-master/index.html?v=1.299",
    embedFile: "/embed/block-blast.embed",
    instructions: descriptionGame,
    descripTion: descriptionGame.BlockPuzzleMaster,
    img: "/img-game/block-puzzle-master.jpeg",
  },
  {
    id: 3,
    name: "BlockBuster Puzzle",
    linkgame:
      "https://html5.gamedistribution.com/b2cc0cd4b40a40dd84b8d452e7c5d6f8/?gd_sdk_referrer_url=https://block-blast.io/blockbuster-puzzle",
    descripTion: descriptionGame.BlockbusterPuzzle,
    img: "/img-game/blockBuster-puzzle.jpeg",
  },
  {
    id: 4,
    name: "SandTrix",
    linkgame: "https://games.crazygames.com/en_US/sandtrix/index.html?v=1.299",
    descripTion: descriptionGame.Sandtrix,
    img: "/img-game/sand-trix.jpeg",
  },
  {
    id: 5,
    name: "Wood Block Journey",
    linkgame:
      "https://games.crazygames.com/en_US/wood-block-journey/index.html?v=1.299",
    descripTion: descriptionGame.WoodBlockJourney,
    img: "/img-game/wood-block-journey.png",
  },
  {
    id: 6,
    name: "Block Champ",
    linkgame:
      "https://playhop.com/dist-app/335526?header=no&utm_source=distrib&utm_medium=gameflare&clid=6950449",
    descripTion: descriptionGame.BlockChamp,
    img: "/img-game/block-champ.png",
  },
  {
    id: 7,
    name: "BLOCK MATCH 8x8",
    linkgame:
      "https://html5.gamedistribution.com/ce5722d11d38481183a7c66963f762d4/",
    descripTion: descriptionGame.BlockBlast,
    img: "/img-game/block-match-8x8.jpeg",
  },
  {
    id: 8,
    name: "Wood Block Tap Away",
    linkgame:
      "https://html5.gamedistribution.com/991c85e777824b43a46422c9f2531764/?gd_sdk_referrer_url=https://block-blast.io/wood-block-tap-away",
    descripTion: descriptionGame.BlockBlast,
    img: "/img-game/wood-block-tap-away.png",
  },
  {
    id: 9,
    name: "Elemental Blockade",
    linkgame: "https://html-classic.itch.zone/html/11981061/index.html",
    descripTion: descriptionGame.BlockBlast,
    img: "/img-game/Elemental-blockade.png",
  },
  {
    id: 10,
    name: "Choco Blocks",
    descripTion: descriptionGame.BlockBlast,
    linkgame:
      "https://html5.gamedistribution.com/330c466258f941d39efc335aef7a2869/?gd_sdk_referrer_url=https://block-blast.io/choco-blocks",
    img: "/img-game/choco-blocks.png",
  },
];

export default ListGame;
