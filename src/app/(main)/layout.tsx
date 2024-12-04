"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Footer from "@/app/(main)/components/footer";
import Header from "@/app/(main)/components/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main className="mt-[70px] w-full p-4 bg-gray-600 h-fit relative">
          {children}
          <SidebarTrigger className="fixed top-[0px] left-0 !z-[100000]" />
        </main>
      </SidebarProvider>
      <Footer />
    </div>
  );
}
