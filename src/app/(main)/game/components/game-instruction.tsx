"use client";
import { TDescription, TDescSub } from "@/listgame/list-game";
import useGame from "@/store/useGame";
import ReactStars from "react-stars";
import { ScrollArea } from "@/components/ui/scroll-area";
import Breadcrumb from "@/app/(main)/components/breadcrumb";
import { useEffect, useState } from "react";

const GameInstruction = () => {
  const { currentGame } = useGame();
  const [rate, setRate] = useState(4.5);
  const handlRate = async (rateG: number) => {
    const isRate = JSON.parse(localStorage.getItem("rated") ?? "false");
    if (isRate) return;
    localStorage.setItem("rated", JSON.stringify(true));
    setRate(rateG);
    await fetch(`/api/rating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rate: rateG,
        game: currentGame.slug,
      }),
    });
  };

  useEffect(() => {
    // Nếu `currentGame` tồn tại, gọi API để lấy đánh giá
    if (currentGame?.name) {
      const fetchGameRating = async () => {
        try {
          const response = await fetch(`/api/rating?game=${currentGame.slug}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch rating");
          }
        } catch (error) {
          console.error("Error fetching rating:", error);
        }
      };

      fetchGameRating();
    }
  }, [currentGame]);
  const breadcrumbItems = [
    { label: "HOME", href: "/", active: false },
    {
      label: currentGame.listTag[0].toUpperCase(),
      href: `/game/${currentGame.listTag[0]}`,
      active: false,
    },
    { label: currentGame.name, href: "", active: true },
  ];
  return (
    <div className="h-fit max-w-[1020px] p-[24px] rounded-2xl bg-[#f8f7fa]">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex flex-col sm:flex-row items-center justify-between mb-[24px]">
        <h1 className="text-2xl sm:text-2xl font-bold">{currentGame.name}</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center ">
          <ReactStars
            value={rate}
            onChange={handlRate}
            count={5}
            size={34}
            color2={"#ffd700"}
            className=" "
          />
          <span className="block ml-[5px]">votes 4.2/5</span>
        </div>
      </div>
      <ScrollArea className="h-[1410px] w-full">
        {currentGame.descripTion?.map((descr: TDescription, index: number) => (
          <div key={index} className="mb-[24px]">
            <h2 className="text-xxl font-bold mb-[16px]">{descr.title}</h2>
            {descr.descSub?.map((sub: TDescSub, subIndex: number) => (
              <div key={subIndex} className="mb-[16px]">
                {sub.title2 && (
                  <h3 className="text-l font-semibold mb-[8px]">
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
