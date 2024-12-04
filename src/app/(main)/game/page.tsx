import GameIframe from "@/app/(main)/game/components/game-iframe";
import GameCard from "./components/game-card";
import GameInstruction from "@/app/(main)/game/components/game-instruction";

export default function Game() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 max-h-[560px]">
        <GameIframe />
        <div className="shrink-0 bg-red-300 w-full md:w-[220px] lg:w-[280px] xl:w-[330px] h-[200px] sm:h-[300px] md:h-[560px]">
          Ads
        </div>
      </div>
      <div className="">
        <GameInstruction />
      </div>
      <div className="w-ful flex items-center justify-center">
        <div className="mt-20 w-[80%] float-col items-center justify-center">
          <h1 className="text-2xl text-white">New Game</h1>
          <div className="flex w-full justify-between flex-wrap mt-4 h-[500px] overflow-y-scroll">
            {Array.from({ length: 25 }, (_, i) => (
              <GameCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
