"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {
  
  return (
    <>
      <div className="flex h-full justify-center">
        <div className="sm:block hidden ">
          {/* 電腦版 */}
          電腦版本 Menu
        </div>
        <div className="sm:hidden">
          {/* 手機版 */}
          <Menu />
        </div>
      </div>
    </>
  );
}