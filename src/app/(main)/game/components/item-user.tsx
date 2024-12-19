"use client";
import { TGame } from "@/listgame/list-game";

export default function ItemUser() {
  return (
    <div className="w-full h-auto mb-[15px]">
      <div className="flex mb-[5px] h-[40px] items-center">
        <div className="w-[33px] h-[33px] rounded-full bg-blue-500 flex items-center justify-center text-white mr-[15px]">
          C
        </div>
        <div className="">
          <span className="block leading-4">name game</span>
          <span className="text-xs leading-3"> a year</span>
        </div>
      </div>
      <p className="break-words leading-5 text-wrap">
        Block balsas í game hot neww csada asd asd as ádđa asdasda asdsd a
      </p>
    </div>
  );
}