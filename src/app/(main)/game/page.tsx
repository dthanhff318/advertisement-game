import Link from "next/link";

export default function Game() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        GAME
        <button>
          <Link href="/about">CLick to Go to ABOUT page</Link>          
        </button>
      </main>
    </div>
  );
}
