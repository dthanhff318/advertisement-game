/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Expand, LaptopMinimal, Share2 } from "lucide-react";

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
    <div className="w-full h-fit overflow-hidden">
      <div className="w-full h-full flex flex-col">
        <AspectRatio ratio={16 / 9} className="flex-1 w-full h-full">
          <iframe
            src="https://kdata1.com/2021/03/3527391/2.1/"
            className="w-full h-full"
            allowFullScreen
            id="game-play-iframe"
          />
        </AspectRatio>
        <div className="h-[40px] flex bg-[#f8f7fa] items-center justify-between">
          <div className="mx-[10px] text-xl font-bold">
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
