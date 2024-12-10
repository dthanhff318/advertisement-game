"use client";
import ListGame, { TGame } from "@/listgame/list-game";
import GameCardPage from "../game/components/game-card-page";

export default function TetrisGame() {
  return (
    <div className="w-full ">
      <h1 className="text-3xl text-white">Tetris Games</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 mt-6">
        {ListGame.filter((game: TGame) =>
          game.listTag.includes("tetris games")
        ).map((game: TGame, index: number) => (
          <GameCardPage key={index} game={game} />
        ))}
      </div>
    </div>
  );
}
