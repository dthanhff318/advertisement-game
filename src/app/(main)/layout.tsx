import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Search } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="h-fit w-full bg-[#09090b] flex items-center justify-end px-4 py-2 gap-6">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-red-600 to-green-400 inline-block text-transparent bg-clip-text">
          Game Stack
        </h1>
        <div className="flex items-center gap-2 bg-white px-2 rounded-md">
          <input
            type="text"
            placeholder="Search a game..."
            className="py-1 outline-none "
          />
          <Search className="size-4 text-blue-300" />
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
