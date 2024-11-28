import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './components/app-sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="h-[74px] flex flex-row items-center justify-between content-center ">
        <div className="basis-1/5 w-14">
          <img
            className=""
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Ftin-tuc%2Fanh-con-gai%2F&psig=AOvVaw14qGCxuAZszf2E5yrPiie5&ust=1732806408491000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjhv4Xl_IkDFQAAAAAdAAAAABAE"
            alt="Example"
          />
        </div>
        <div className="flex items-center justify-items-center">
          <Input className="w-[400px]" />
        </div>
        <div className="basis-1/5"></div>
      </header>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <footer>Shared Footer</footer>
    </div>
  );
}
