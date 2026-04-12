"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

export default function Menu() {
  
  return (
    <>
      <div className="bg-white w-[320px] h-full p-4">

        <Link href="/">  
            HOME
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/cat.png" alt="cat" width={80} height={80} />
          </div>
        </div>

        <div className="text-center">名字</div>
        <div className="text-center">簡介</div>

        <div className="flex gap-2">
          {/* icons, links, images */}
          <div>
            <TbActivity />
          </div>
          <div>社群連結</div>
          <div>社群連結</div>
        </div>


        <Link href="/about">
          <div className="bg-gray-300 p-[16px] rounded-md">關於我</div>
        </Link>

        <Link href="/hobby">
          <div className="bg-gray-300 p-[16px] mt-2 rounded-md">我的興趣</div>
        </Link>

        <Link href="/design">
          <div className="bg-gray-300 p-[16px] mt-2 rounded-md">設計專案</div>
        </Link>

        <Link href="/project">
          <div className="bg-gray-300 p-[16px] mt-2 rounded-md">程式專案</div>
        </Link>


        </div>
    </>
  );
}
