"use client"

import Menu from "../../component/Menu";
import Link from "next/link";

export default function ProgrammingProject() {

  let projectData = {
    "1": {
      "name":"寵物用品店",
      "imageUrl": "/cat.png"
    },
    "2": {
      "name":"樂器行官網",
      "imageUrl": "/ins.jpg"
    },
  };

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
          <div className="bg-white h-full w-full p-3">
            <div className="text-[32px] font-bold">程式專案</div>
            <div className="text-[16px] text-gray-600 ">這裡收錄我的程式學習過程</div>
            
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 m-[26px]">
              
              <div
                className={`bg-amber-50 rounded-2xl h-full flex justify-center items-center 
                row-span-2 bg-center bg-cover relative overflow-hidden`}
                style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}
              >
                
                <div className="text-white bg-black/15 w-full h-[80px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0                  
                ">
                  { projectData["1"]["name"] }
                </div>

                {/* <div className="text-red-500 text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">中心點</div> */}
              </div>



              <div className={`bg-amber-50 rounded-2xl h-full flex justify-center items-center 
                bg-center bg-cover relative overflow-hidden`}
                
                style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
              
              >

                <div className="text-white bg-black/15 w-full h-[80px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute bottom-0"
                >
                  { projectData["2"]["name"] }
                </div>
                
              </div>
              
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案2</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案3</div>
              <div className="bg-amber-50 rounded-2xl h-full flex justify-center items-center row-span-2">專案4</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案5</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案6</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案7</div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}