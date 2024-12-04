"use client";

import GameCardPage, { TGame } from "../game/components/game-card-page";
import { useEffect, useState } from "react";
import ListGame from "@/listgame/list-game";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  const [results, setResults] = useState<TGame[]>([]);
  useEffect(() => {
    if (query) {
      const filteredAnimals = ListGame.filter((game) =>
        game.name.toLowerCase().includes((query as string).toLowerCase())
      );
      setResults(filteredAnimals); // Cập nhật mảng kết quả
    }
  }, [query]);
  return (
    <div className="w-full px-4 py-6">
      <h1 className="text-3xl text-white">Search</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 mt-6">
        {results.length > 0 ? (
          results.map((game: TGame, index: number) => (
            <GameCardPage key={index} game={game} />
          ))
        ) : (
          <div className="p-2 text-gray-500">No matches found.</div>
        )}
      </div>
    </div>
  );
}
