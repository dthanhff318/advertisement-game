import GameIframe from "@/app/(main)/game/components/game-iframe";
import GameCard from "./components/game-card";
import GameInstruction from "@/app/(main)/game/components/game-instruction";

export default function Game() {
  return (
    <div className="w-full">
      <GameIframe />
      <GameInstruction />
      <div className="flex w-full gap-2 flex-wrap mt-4 justify-center">
        {Array.from({ length: 25 }, (_, i) => (
          <GameCard key={i} />
        ))}
      </div>
    </div>
  );
}
