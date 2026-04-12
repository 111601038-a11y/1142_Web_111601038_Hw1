export default function ProgrammingProject() {
  const projectData = {
    "1": {
      "name":"搭蘆灣社三十週年",
      "imageUrl": "/taluan.png"
    },
    "2": {
      "name":"原資中心",
      "imageUrl": "/poster.jpg"
    },
    "3": {
      "name":"政植涯",
      "imageUrl":"/work.png"
    }
  };

  return (
    <div className="bg-white min-h-full w-full">
      <div className="h-full w-full bg-white p-3">
            <div className="text-[32px] font-bold">設計成果
            </div>
            <div className="text-[16px] text-gray-600 ">That's how we roll</div>
            
            <div className="m-[26px] grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
              <div
                className="relative flex aspect-[4/5] w-full min-w-0 justify-center overflow-hidden rounded-2xl bg-amber-50 bg-cover bg-center"
                style={{ backgroundImage: `url(${projectData["1"]["imageUrl"]})` }}
              >
                
                <div className="absolute bottom-0 flex h-14 w-full items-center justify-center bg-black/15 px-1 text-center text-sm text-white backdrop-blur-sm sm:h-[72px] sm:text-base">
                  { projectData["1"]["name"] }
                </div>

                {/* <div className="text-red-500 text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">中心點</div> */}
              </div>



              <div
                className="relative flex aspect-[4/5] w-full min-w-0 justify-center overflow-hidden rounded-2xl bg-amber-50 bg-cover bg-center"
                style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
              >
                <div className="absolute bottom-0 flex h-14 w-full items-center justify-center bg-black/15 px-1 text-center text-sm text-white backdrop-blur-sm sm:h-[72px] sm:text-base">
                  { projectData["2"]["name"] }
                </div>
              </div>

              <div
                className="relative flex aspect-[4/5] w-full min-w-0 justify-center overflow-hidden rounded-2xl bg-amber-50 bg-cover bg-center"
                style={{ backgroundImage: `url(${projectData["3"]["imageUrl"]})` }}
              >
                <div className="absolute bottom-0 flex h-14 w-full items-center justify-center bg-black/15 px-1 text-center text-sm text-white backdrop-blur-sm sm:h-[72px] sm:text-base">
                  { projectData["3"]["name"] }
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}