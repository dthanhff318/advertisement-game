"use client";
import { TGame } from "@/listgame/list-game";
import useGame from "@/store/useGame";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GameCard({ game }: { game: TGame }) {
  const { updateCurrentGame } = useGame();
  const router = useRouter();
  const handleGameClick = (game: TGame) => {
    updateCurrentGame(game);
    router.push(`/game/${game.slug}`);
  };
  return (
    <div
      onClick={() => handleGameClick(game)}
      className="h-[160px] cursor-pointer relative group overflow-hidden transition-all rounded-md"
    >
      <Image
        className="h-full w-full object-cover"
        src={game.img ?? ""}
        alt="Game thumbnail"
        width={100}
        height={50}
      />
      <div className="item-center absolute inset-0 bg-opacity-25 bg-slate-600 translate-y-[100%] group-hover:translate-y-0 flex transition-all flex-col justify-end p-2">
        <p className="text-white font-bold">{game.name}</p>
      </div>
    </div>
  );
}
