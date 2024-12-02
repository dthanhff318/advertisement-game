/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ListGame from "@/listgame/list-game";
import { Expand, LaptopMinimal, List, Share2 } from "lucide-react";
import Image from "next/image";

export default function GameIframe() {
  const handleFullScreen = () => {
    const iframeGame = document.querySelector("#game-play-iframe") as any;
    const htmlDocument = document as any;
    if (!iframeGame) return;
    const isFullScreen =
      document.fullscreenElement === iframeGame ||
      htmlDocument.webkitFullscreenElement === iframeGame ||
      htmlDocument.mozFullScreenElement === iframeGame ||
      htmlDocument.msFullscreenElement === iframeGame;
    if (isFullScreen) return;
    if (!isFullScreen) {
      if (iframeGame.requestFullscreen) {
        iframeGame.requestFullscreen();
      } else if (iframeGame.mozRequestFullScreen) {
        iframeGame.mozRequestFullScreen();
      } else if (iframeGame.requestFullscreen) {
        iframeGame.webkitRequestFullscreen();
      } else if (iframeGame.requestFullscreen) {
        iframeGame.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="w-full max-w-[920px] h-[560px]  overflow-hidden flex items-center justify-center bg-black">
      <div className="w-full h-full flex flex-col justify-end">
        <div className="flex-1 h-full flex items-center">
          <AspectRatio ratio={16 / 9} className="">
            <iframe
              src={ListGame[2].linkgame}
              className="w-full h-full"
              allowFullScreen
              id="game-play-iframe"
            />
          </AspectRatio>
        </div>
        <div className="min-h-[50px] w-full flex bg-[#f8f7fa] items-center justify-between">
          <div className="flex text-xl font-bold h-full">
            <Image
              className="h-full w-full  p-[5px]"
              width={30}
              height={30}
              alt="Logo game"
              src="https://t.vietgiaitri.com/2020/1/6/loat-anh-game-tuyet-dep-tha-ho-lua-chon-de-lam-hinh-nen-dien-thoai-cuc-chat-fb3.jpg"
            />
            <p>BlockBlast</p>
          </div>
          <div className="flex mx-[20px]">
            <Share2 className="mr-[16px] hover:text-blue-600 cursor-pointer" />
            <LaptopMinimal className="mr-[20px] hover:text-blue-600 cursor-pointer" />
            <Expand
              className="hover:text-blue-600 cursor-pointer"
              onClick={handleFullScreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
