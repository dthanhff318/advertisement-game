"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value); // Lấy giá trị từ input
  };
  const handleSearchClick = () => {
    router.push(`/search?query=${encodeURIComponent(inputValue)}`);
  };
  return (
    <div>
      <header className="h-fit w-full bg-[#09090b] flex items-center justify-end px-4 py-2 gap-6">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-red-600 to-green-400 inline-block text-transparent bg-clip-text">
          Game Stack
        </h1>
        <div className="flex items-center gap-2 bg-white px-2 rounded-md">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search a game..."
            className="py-1 outline-none "
          />
          <Search
            onClick={handleSearchClick}
            className="size-4 text-blue-300"
          />
        </div>
      </header>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-4 bg-gray-600 h-fit">{children}</main>
      </SidebarProvider>
      <footer className="">Shared Footer</footer>
    </div>
  );
}
