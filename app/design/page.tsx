"use client"
import Image from "next/image"
import Menu from "../../component/Menu"
import Link from "next/link";
export default function about() {

  return (
    <>
      <div className="flex h-full">
        <Link href="/" className="sm:hidden absolute left-2 top-2 bg-white">  
            返回
        </Link>
        <div className="sm:block hidden">
          <Menu />
        </div>
        <div className="bg-red-500 w-full">
          設計專案
        </div>
      </div>
      
    </>
  );
}