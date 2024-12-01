import GameCard from "../game/components/game-card";

export default function HotGame() {
  return (
    <div className="w-full">
      <h1 className="text-3xl text-white">Game Hot</h1>
      <div className="flex w-full gap-2 flex-wrap mt-4">
        {Array.from({ length: 25 }, (_, i) => (
          <GameCard key={i} />
        ))}
      </div>
    </div>
  );
}