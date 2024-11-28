import { Expand, LaptopMinimal, Share2 } from 'lucide-react';

export default function PageGame() {
  return (
    <div className="w-[832px] h-[465px] ">
      <iframe className="h-full w-full" src="https://kdata1.com/2021/03/3527391/2.1/"></iframe>{' '}
      <div className="h-[40px] flex bg-[#f8f7fa] items-center justify-between">
        <div className="mx-[10px] text-xl font-bold">
          <p>BlockBlast</p>
        </div>
        <div className="flex mx-[20px]">
          <Share2 className="mr-[16px] hover:text-blue-600" />
          <LaptopMinimal className="mr-[20px] hover:text-blue-600" />
          <Expand className="hover:text-blue-600" />
        </div>
      </div>
    </div>
  );
}
