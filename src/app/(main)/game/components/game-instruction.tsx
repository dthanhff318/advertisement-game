import descriptionGame from "@/listgame/description-game";

const GameInstruction = () => {
  return (
    <div className="max-w-[920px] h-fit p-[24px] rounded-2xl bg-[#f8f7fa]">
      {descriptionGame.des.map((descr, index) => (
        <div key={index} className="mb-[24px]">
          <h2 className="text-2xl font-bold mb-[16px]">{descr.title}</h2>
          {descr.descSub.map((sub, subIndex) => (
            <div key={subIndex} className="mb-[16px]">
              {sub.title2 && (
                <h3 className="text-xl font-semibold mb-[8px]">{sub.title2}</h3>
              )}
              {sub.chilren.map((child, childIndex) => (
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
