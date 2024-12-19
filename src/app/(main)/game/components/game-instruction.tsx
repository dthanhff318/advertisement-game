"use client";
import { TDescription, TDescSub } from "@/listgame/list-game";
import useGame from "@/store/useGame";
import ReactStars from "react-stars";
import { ScrollArea } from "@/components/ui/scroll-area";

const GameInstruction = () => {
  const { currentGame } = useGame();
  return (
    <div className="h-fit max-w-[1020px] p-[24px] rounded-2xl bg-[#f8f7fa]">
      <ScrollArea className="h-[1510px] w-full">
        <div className="flex items-center justify-between mb-[24px]">
          <h1 className="text-3xl font-bold">{currentGame.name}</h1>
          <ReactStars count={5} size={34} color2={"#ffd700"} />
        </div>
        {currentGame.descripTion?.map((descr: TDescription, index: number) => (
          <div key={index} className="mb-[24px]">
            <h2 className="text-2xl font-bold mb-[16px]">{descr.title}</h2>
            {descr.descSub?.map((sub: TDescSub, subIndex: number) => (
              <div key={subIndex} className="mb-[16px]">
                {sub.title2 && (
                  <h3 className="text-xl font-semibold mb-[8px]">
                    {sub.title2}
                  </h3>
                )}
                {sub.chilren.map((child: string, childIndex: number) => (
                  <p key={childIndex} className="mb-[8px] text-gray-700">
                    {child}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default GameInstruction;
