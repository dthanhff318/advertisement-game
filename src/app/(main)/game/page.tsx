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
      <div className="w-full flex flex-col md:flex-row mt-[50px] gap-4">
        <div className="basis-3/3">
          <GameInstruction />
        </div>
        <div className="basis-1/3 bg-white rounded-3xl ">
          <div className="float-col p-[10px]">
            <h1 className="text-2xl">Hot Game</h1>
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-[10px]">
              {Array.from({ length: 25 }, (_, i) => (
                <GameCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
