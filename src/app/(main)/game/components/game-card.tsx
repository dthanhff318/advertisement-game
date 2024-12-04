import Image from "next/image";

export default function GameCard() {
  return (
    <div className="h-[160px] cursor-pointer relative group overflow-hidden transition-all rounded-md">
      <Image
        className="h-full w-full object-cover"
        src="https://cdn.mobilecity.vn/mobilecity-vn/images/2024/05/hinh-nen-gaming-cac-trang-web.jpg.webp"
        alt="Game thumbnail"
        width={100}
        height={50}
      />
      <div className="item-center absolute inset-0 bg-opacity-25 bg-slate-600 translate-y-[100%] group-hover:translate-y-0 flex transition-all flex-col justify-end p-2">
        <p className="text-white font-bold">Racing boy</p>
      </div>
    </div>
  );
}
