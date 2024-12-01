import Image from "next/image";

export default function GameCardPage() {
  return (
    <div className="w-[207px] h-[277px] p-[16px] cursor-pointer rounded-xl bg-[#18181b] flex flex-col items-center justify-center border-[2px] border-black hover:border-white">
      <Image
        className="object-cover w-full h-[172.66px] rounded-xl"
        src="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/05/hinh-nen-gaming-cac-trang-web.jpg.webp"
        alt="Game thumbnail"
        width={100}
        height={50}
      />
      <div className="mt-[16px]">
        <p className="font-semibold text-white">Racing boy</p>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 512 512"
          >
            <path
              fill="#e8c098"
              d="m274.909 31.641l60.046 121.667a21.09 21.09 0 0 0 15.877 11.535l134.267 19.51c17.296 2.513 24.202 23.768 11.687 35.968l-97.157 94.704a21.08 21.08 0 0 0-6.064 18.665l22.936 133.725c2.954 17.226-15.126 30.362-30.596 22.229l-120.092-63.136a21.08 21.08 0 0 0-19.625 0l-120.092 63.136c-15.47 8.133-33.55-5.003-30.596-22.229l22.936-133.725a21.09 21.09 0 0 0-6.064-18.665l-97.157-94.704c-12.517-12.199-5.61-33.454 11.685-35.967l134.267-19.51a21.09 21.09 0 0 0 15.877-11.535L237.09 31.642c7.736-15.673 30.084-15.673 37.819-.001"
            ></path>
          </svg>
          <div className="ml-[10px] text-white">4.9</div>
        </div>
      </div>
    </div>
  );
}
