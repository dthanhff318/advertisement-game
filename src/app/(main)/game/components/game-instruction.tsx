import { TDescription, TDescSub } from "@/listgame/list-game";
import useGame from "@/store/useGame";

const GameInstruction = () => {
  const { currentGame } = useGame();
  return (
    <div className="h-fit p-[24px] rounded-2xl bg-[#f8f7fa]">
      {currentGame.descripTion?.map((descr: TDescription, index: number) => (
        <div key={index} className="mb-[24px]">
          <h2 className="text-2xl font-bold mb-[16px]">{descr.title}</h2>
          {descr.descSub?.map((sub: TDescSub, subIndex: number) => (
            <div key={subIndex} className="mb-[16px]">
              {sub.title2 && (
                <h3 className="text-xl font-semibold mb-[8px]">{sub.title2}</h3>
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
    </div>
  );
};

export default GameInstruction;
