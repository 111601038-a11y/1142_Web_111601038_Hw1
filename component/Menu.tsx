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
          <div className="relative h-[125px] w-[125px] shrink-0 overflow-hidden rounded-full bg-gray-200">
            <Image src="/gothic.png" alt="頭像" fill
              sizes="125px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="mt-5 text-center text-2xl font-extrabold text-black">呂芃慧</div>

        <div className="flex w-full items-center justify-center gap-5 mt-5">
          <a
            href="https://www.strava.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 transition-colors hover:text-orange-500"
            aria-label="Strava"
          >
            <TbActivity className="h-8 w-8" aria-hidden />
          </a>
          <a
            href="https://www.instagram.com/nordi_y_1120/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 transition-colors hover:text-pink-500"
            aria-label="Instagram"
          >
            <FaSquareInstagram className="h-8 w-8" aria-hidden />
          </a>
          <a
            href="https://youtu.be/K5b5tOneB_o?si=Vuxx_hQqDU_F9npp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 transition-colors hover:text-indigo-500"
            aria-label="Music"
          >
            <IoIosMusicalNotes className="h-8 w-8" aria-hidden />
          </a>
        </div>


        <Link href="/about" className="mt-5 block">
          <div className="rounded-md bg-sky-500/50 p-[16px] text-center">關於我</div>
        </Link>

        <Link href="/hobby">
          <div className="mt-2 rounded-md bg-sky-500/50 p-[16px] text-center">我的興趣</div>
        </Link>

        <Link href="/design">
          <div className="mt-2 rounded-md bg-sky-500/50 p-[16px] text-center">設計成果</div>
        </Link>

        <Link href="/project">
          <div className="mt-2 rounded-md bg-sky-500/50 p-[16px] text-center">文章創作</div>
        </Link>


        </div>
    </>
  );
}
