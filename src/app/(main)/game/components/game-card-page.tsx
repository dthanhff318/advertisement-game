"use client";
import { TGame } from "@/listgame/list-game";
import useGame from "@/store/useGame";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GameCardPage({ game }: { game: TGame }) {
  const { updateCurrentGame } = useGame();
  const router = useRouter();
  const handleGameClick = (game: TGame) => {
    updateCurrentGame(game);
    router.push(`/game/${game.slug}`);
    // Cập nhật state trong zustand
  };
  return (
    <div
      className="
        w-[100%]
        p-4
        cursor-pointer
        rounded-xl
        bg-[#18181b]
        flex
        flex-col
        items-center
        justify-center
        border-2
        border-black
        hover:border-white
        relative
        aspect-square
      "
      onClick={() => handleGameClick(game)}
    >
      <Image
        className="h-full w-full object-cover"
        src={game.img ?? ""}
        alt="Game thumbnail"
        width={300}
        height={180}
      />
      <div className="mt-4 text-center">
        <div className="h-[48px] text-center flex items-center justify-center">
          <p className="font-semibold text-white text-base sm:text-sm lg:text-base double-line-height">
            {game.name}
          </p>
        </div>
        <div className="flex items-center justify-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 512 512"
            className="sm:w-4 sm:h-4 lg:w-5 lg:h-5"
          >
            <path
              fill="#e8c098"
              d="m274.909 31.641l60.046 121.667a21.09 21.09 0 0 0 15.877 11.535l134.267 19.51c17.296 2.513 24.202 23.768 11.687 35.968l-97.157 94.704a21.08 21.08 0 0 0-6.064 18.665l22.936 133.725c2.954 17.226-15.126 30.362-30.596 22.229l-120.092-63.136a21.08 21.08 0 0 0-19.625 0l-120.092 63.136c-15.47 8.133-33.55-5.003-30.596-22.229l22.936-133.725a21.09 21.09 0 0 0-6.064-18.665l-97.157-94.704c-12.517-12.199-5.61-33.454 11.685-35.967l134.267-19.51a21.09 21.09 0 0 0 15.877-11.535L237.09 31.642c7.736-15.673 30.084-15.673 37.819-.001"
            ></path>
          </svg>
          <div className="ml-2 text-white text-sm sm:text-xs">4.9</div>
        </div>
      </div>
    </div>
  );
}
