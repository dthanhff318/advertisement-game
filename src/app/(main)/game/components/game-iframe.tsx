/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useClickOutside from "@/hooks/use-click-outside";
import { Expand, LaptopMinimal, Share2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GameIframe() {
  const [cinemaMode, setCinemaMode] = useState(false);
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

  const iframeWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/embed/block-blast.embed")
      .then((response) => response.text())
      .then((data) => {
        const iframe = document.getElementById("game-play-iframe") as any;
        iframe.srcdoc = "/embed/block-blast.embed";
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(data);
        iframeDoc.close();
      })
      .catch((error) => console.error("Error loading file:", error));
  }, []);

  // Handle click outside when Iframe in cinema mode
  useClickOutside({
    target: ".iframe-wrap",
    callback: () => setCinemaMode(false),
  });

  return (
    <>
      <div
        className={`${
          cinemaMode ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-80 z-[100000]`}
      ></div>
      {cinemaMode && (
        <div className="w-full max-w-[920px] h-[560px] md:overflow-hidden max-h-[560px] bg-gray-500"></div>
      )}
      <div
        ref={iframeWrapRef}
        className={`iframe-wrap w-full max-w-[920px] h-[560px] md:overflow-hidden flex items-center justify-center bg-black  ${
          cinemaMode
            ? "z-[100001] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
            : ""
        }`}
      >
        <div className="w-full h-full flex flex-col justify-end">
          <div className="flex-1 h-full flex items-center">
            <AspectRatio ratio={16 / 9} className="">
              <iframe
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
              <LaptopMinimal
                className="mr-[20px] hover:text-blue-600 cursor-pointer"
                onClick={() => setCinemaMode((prev) => !prev)}
              />
              <Expand
                className="hover:text-blue-600 cursor-pointer"
                onClick={handleFullScreen}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
