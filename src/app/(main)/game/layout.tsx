import GameCard from "./components/game-card";
import GameInstruction from "@/app/(main)/game/components/game-instruction";
import ListGame, { TGame } from "@/listgame/list-game";
import { ReactNode } from "react";
import { CommentGame } from "./components/comment";

type TProps = {
  children: ReactNode;
};
export default function GameLayout({ children }: TProps) {
  // const fetchRatingAndComment = async () => {
  //   const response = await fetch("/api/rating?game=block-blast", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // body: JSON.stringify({
  //     //   rate: 5,
  //     //   email: "tizz@gmail.com",
  //     // }),
  //   });
  //   // const data = await response.json();
  //   // console.log(data);
  // };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 max-h-[610px]">
        {children}
        <div className="shrink-0 bg-red-300 w-full md:w-[220px] lg:w-[280px] xl:w-[330px] 2xl:w-[420px] h-[200px] sm:h-[300px] md:h-[610px]">
          Ads
        </div>
        <div className="hidden 2xl:flex flex-col gap-4 justify-start h-[200px] sm:h-[300px] md:h-[610px] ">
          {ListGame.map((game: TGame, index: number) => {
            if (index < 4) {
              return <GameCard key={index} game={game} />;
            }
            return null;
          })}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row mt-[50px] gap-4">
        <GameInstruction />
        <div className="shrink-0 w-full md:w-[220px] lg:w-[280px] xl:w-[330px] 2xl:w-[420px]">
          <div className="p-[10px] shrink-0 bg-white rounded-2xl">
            <h1 className="text-2xl ml-1 font-semibold mb-2">Hot Game</h1>
            <div className="grid grid-cols-4 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-[10px]">
              {ListGame.slice(0, 12).map((game: TGame, index: number) => (
                <GameCard key={index} game={game} />
              ))}
            </div>
          </div>
          <div className="mt-[20px] float-col shrink-0 bg-white rounded-2xl">
            <CommentGame></CommentGame>
          </div>
        </div>
      </div>
    </div>
  );
}
