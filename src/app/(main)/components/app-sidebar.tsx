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

// Menu items.

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Adventure",
    url: "#",
    icon: Adventure,
  },
  {
    title: "Sport",
    url: "#",
    icon: RacingIcon,
  },
  {
    title: "Cooking",
    url: "#",
    icon: Cook,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#18181b] w-[200px]">
      <SidebarContent className="bg-[#18181b] w-full">
        <SidebarGroup>
          <div className="flex gap-4 items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Game Block"
              width={100}
              height={30}
              className="object-contain w-full h-[80px]"
            />
          </div>
          <SidebarGroupContent className="pt-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="group/item hover:bg-[#27272a] flex items-center justify-start gap-4 px-2 py-2 rounded-md transition-all text-white cursor-pointer"
                >
                  <div className="group/item-hover:scale-125 transition-all">
                    {item.icon}
                  </div>
                  <span className="font-bold">{item.title}</span>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
