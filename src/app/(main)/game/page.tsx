"use client";
import GameIframe from "@/app/(main)/game/components/game-iframe";
import GameCard from "./components/game-card";
import GameInstruction from "@/app/(main)/game/components/game-instruction";
import ListGame, { TGame } from "@/listgame/list-game";
export default function Game() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 max-h-[560px]">
        <GameIframe />
        <div className="shrink-0 bg-red-300 w-full md:w-[220px] lg:w-[280px] xl:w-[330px] 2xl:w-[420px] h-[200px] sm:h-[300px] md:h-[560px]">
          Ads
        </div>
        <div className="hidden xl:flex flex-col gap-4 justify-start">
          {ListGame.map((game: TGame, index: number) => {
            if (index < 4) {
              return <GameCard key={index} game={game} />;
            }
            return null; // Trả về null để không render gì nếu điều kiện không thỏa mãn
          })}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row mt-[50px] gap-4">
        <div className="basis-3/3">
          <GameInstruction />
        </div>
        <div className="basis-1/3 bg-white rounded-2xl ">
          <div className="float-col p-[10px]">
            <h1 className="text-2xl ml-1 font-semibold mb-2">Hot Game</h1>
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-[10px]">
              {ListGame.map((game: TGame, index: number) => (
                <GameCard key={index} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
