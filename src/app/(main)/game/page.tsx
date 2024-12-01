import GameIframe from "@/app/(main)/game/components/game-iframe";
import GameCard from "./components/game-card";
import GameInstruction from "@/app/(main)/game/components/game-instruction";

export default function Game() {
  return (
    <div className="w-full">
      <GameIframe />
      <div className="flex items-center justify-center">
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
