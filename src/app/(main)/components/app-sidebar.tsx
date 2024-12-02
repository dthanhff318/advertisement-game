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
  Cook,
  Home,
  RacingIcon,
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
    title: "Adventure",
    url: "#",
    icon: Adventure,
    uri: "/game",
  },
  {
    title: "Sport",
    url: "#",
    icon: RacingIcon,
    uri: "/game",
  },
  {
    title: "Cooking",
    url: "#",
    icon: Cook,
    uri: "/hotgame",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#18181b]">
      <SidebarContent className="bg-[#18181b] w-full">
        <SidebarGroup>
          <Link href="/game" className="flex gap-4 items-center justify-center">
            <Image
              src="/images/logo.png"
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
