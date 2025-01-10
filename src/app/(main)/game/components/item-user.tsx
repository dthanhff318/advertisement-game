"use client";

export default function ItemUser({ comment }: any) {
  return (
    <div className="w-full h-auto mb-[15px]">
      <div className="flex mb-[5px] h-[40px] items-center">
        <div className="w-[33px] h-[33px] rounded-full bg-blue-500 flex items-center justify-center text-white mr-[15px]">
          C
        </div>
        <div className="">
          <span className="block leading-4">{comment.email}</span>
          <span className="text-xs leading-3">{comment.updateAt}</span>
        </div>
      </div>
      <p className="break-words leading-5 text-wrap">{comment.comment}</p>
    </div>
  );
}
