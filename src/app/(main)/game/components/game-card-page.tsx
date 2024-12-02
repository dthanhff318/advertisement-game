import Image from "next/image";
export type TGame = {
  id: number;
  name: string;
  linkgame: string;
};
type GameComponentProps = {
  game: TGame;
  key: number;
};

// export default function GameCardPage(game: GameComponentProps) {
//   return (
//     <div className="w-full max-w-[207px] h-[277px] p-4 cursor-pointer rounded-xl bg-[#18181b] flex flex-col items-center justify-center border-2 border-black hover:border-white sm:w-full">
//       <Image
//         className="object-cover w-full h-[172.66px] rounded-xl"
//         src="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/05/hinh-nen-gaming-cac-trang-web.jpg.webp"
//         alt="Game thumbnail"
//         width={100}
//         height={50}
//       />
//       <div className="mt-4 text-center">
//         <p className="font-semibold text-white">{game.game.name}</p>
//         <div className="flex items-center justify-center mt-2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width={20}
//             height={20}
//             viewBox="0 0 512 512"
//           >
//             <path
//               fill="#e8c098"
//               d="m274.909 31.641l60.046 121.667a21.09 21.09 0 0 0 15.877 11.535l134.267 19.51c17.296 2.513 24.202 23.768 11.687 35.968l-97.157 94.704a21.08 21.08 0 0 0-6.064 18.665l22.936 133.725c2.954 17.226-15.126 30.362-30.596 22.229l-120.092-63.136a21.08 21.08 0 0 0-19.625 0l-120.092 63.136c-15.47 8.133-33.55-5.003-30.596-22.229l22.936-133.725a21.09 21.09 0 0 0-6.064-18.665l-97.157-94.704c-12.517-12.199-5.61-33.454 11.685-35.967l134.267-19.51a21.09 21.09 0 0 0 15.877-11.535L237.09 31.642c7.736-15.673 30.084-15.673 37.819-.001"
//             ></path>
//           </svg>
//           <div className="ml-2 text-white text-sm">4.9</div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function GameCardPage({ game }: { game: TGame }) {
  return (
    <div
      className="
        w-[42%]
        ms:w-[28%]
        md:w-[30%]
        lg:w-[16%]
        max-w-[300px]
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
        sm:max-w-[240px] /* Điều chỉnh kích thước trên màn hình nhỏ */
        lg:max-w-[280px] /* Điều chỉnh kích thước trên tablet */
      "
    >
      <Image
        className="object-cover w-full h-[100px] rounded-xl sm:h-[100px] md:h-[160px] lg:h-[220px]"
        src="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/05/hinh-nen-gaming-cac-trang-web.jpg.webp"
        alt="Game thumbnail"
        width={300}
        height={180}
      />
      <div className="mt-4 text-center">
        <p className="font-semibold text-white text-base sm:text-sm lg:text-base">
          {game.name}
        </p>
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
