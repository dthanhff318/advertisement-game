import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  Adventure,
  Home,
  HotGame,
  Puzzle,
} from "@/app/(main)/components/icons/icon-sidebar";
import Link from "next/link";

// Menu items.

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    uri: "/game",
  },
  {
    title: " New Games",
    url: "#",
    icon: Adventure,
    uri: "/newgame",
  },
  {
    title: "Hot Game",
    url: "#",
    icon: HotGame,
    uri: "/hotgame",
  },
  {
    title: "Puzzle Games",
    url: "#",
    icon: Puzzle,
    uri: "/pouzzlegames",
  },
  {
    title: "Casual Games",
    url: "#",
    icon: Puzzle,
    uri: "/casualgames",
  },
  {
    title: "Tetris Games",
    url: "#",
    icon: Puzzle,
    uri: "/tetrisgames",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#18181b] mt-[70px]">
      <SidebarContent className="bg-[#18181b] w-full">
        <SidebarGroup>
          <Link href="/game" className="flex gap-4 items-center justify-center">
            <Image
              src="/images/block-blast.jpeg"
              alt="Game Block"
              width={100}
              height={30}
              className="object-contain w-full h-[80px]"
            />
          </Link>
          <SidebarGroupContent className="pt-4">
            <SidebarMenu>
              {items.map((item) => (
                <Link href={item.uri} key={item.title}>
                  <SidebarMenuItem className="group/item hover:bg-[#27272a] flex items-center justify-start gap-4 px-2 py-2 rounded-md transition-all text-white cursor-pointer">
                    <div className="group/item-hover:scale-125 transition-all">
                      {item.icon}
                    </div>
                    <span className="font-bold">{item.title}</span>
                  </SidebarMenuItem>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
