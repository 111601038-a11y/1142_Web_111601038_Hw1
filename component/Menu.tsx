"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoIosHome } from "react-icons/io";

export default function Menu() {
  
  return (
    <>
      <div className="h-full min-h-full w-full bg-sky-500/25 p-4">

        <Link href="/">  
          <IoIosHome className="h-8 w-8" aria-hidden />
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200 w-[125px] h-[125px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/cat.png" alt="cat" width={80} height={80} />
          </div>
        </div>

        <div className="text-center">名字</div>
        <div className="text-center">簡介</div>

        <div className="flex w-full items-center justify-center gap-3">
          <div className="flex items-center">
            <TbActivity className="h-8 w-8" aria-hidden />
          </div>
          <div className="flex items-center">
            <FaSquareInstagram className="h-8 w-8" aria-hidden />
          </div>
          <div className="flex items-center">
            <IoIosMusicalNotes className="h-8 w-8" aria-hidden />
          </div>
        </div>


        <Link href="/about">
          <div className="bg-sky-500/50 p-[16px] rounded-md">關於我</div>
        </Link>

        <Link href="/hobby">
          <div className="bg-sky-500/50 p-[16px] mt-2 rounded-md">我的興趣</div>
        </Link>

        <Link href="/design">
          <div className="bg-sky-500/50 p-[16px] mt-2 rounded-md">設計成果</div>
        </Link>

        <Link href="/project">
          <div className="bg-sky-500/50 p-[16px] mt-2 rounded-md">文章創作</div>
        </Link>


        </div>
    </>
  );
}
