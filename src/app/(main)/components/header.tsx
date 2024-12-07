"use client";
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    router.push(`/search?query=${encodeURIComponent(inputValue)}`);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };
  return (
    <header className="h-[70px] w-[100vw] bg-[#09090b] flex items-center justify-end px-4 py-2 gap-6 fixed top-0 !z-[10000] border-solid border-b-[1px] border-b-[#d3d1d1]">
      <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-red-600 to-green-400 inline-block text-transparent bg-clip-text">
        Block Blast
      </h1>
      <div className="flex items-center gap-2 bg-white px-2 rounded-md mr-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Search a game..."
          className="py-1 outline-none "
        />
        <Search onClick={handleSearchClick} className="size-4 text-blue-300" />
      </div>
    </header>
  );
};

export default Header;
