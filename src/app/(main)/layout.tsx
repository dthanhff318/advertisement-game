import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="h-[74px]">
        <div className="flex items-center justify-between w-full max-w-lg mx-auto">
          <div className="">
            <img
              className="basis-1/5"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhoanghamobile.com%2Ftin-tuc%2Fanh-con-gai%2F&psig=AOvVaw14qGCxuAZszf2E5yrPiie5&ust=1732806408491000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjhv4Xl_IkDFQAAAAAdAAAAABAE"
              alt="Example"
            />
          </div>
          <div className="flex-grow flex justify-center">
            <Input />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>Shared Footer</footer>
    </div>
  );
}
