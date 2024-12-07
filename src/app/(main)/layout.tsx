"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import Footer from "@/app/(main)/components/footer";
import Header from "@/app/(main)/components/header";
// import FixedAd from "@/app/(main)/components/fixed-ads";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* <FixedAd /> */}
      <Header />
      <SidebarProvider>
        <AppSidebar />
        <main className="mt-[70px] w-full p-2 sm:p-4 bg-gray-600 h-fit relative">
          {children}
          <SidebarTrigger className="fixed top-[14px] left-[14px] !z-[10000]" />
        </main>
      </SidebarProvider>
      <Footer />
    </div>
  );
}
