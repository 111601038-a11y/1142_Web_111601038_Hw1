import Image from "next/image";

type TextSection = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};
type EducationSection = {
  title: string;
  school: string;
  programs: readonly string[];
};

const SECTIONS = [
  {
    title: "我的SAPAH",
    description:
      "Sapah，在太魯閣語為「家」的意涵，歡迎和我一同探索這座山林。",
    imageSrc: "/truku.jpg",
    imageAlt: "Sapah 與山林景色",
  },
  {
    title: "主要學歷",
    school: "國立政治大學",
    programs: ["法律學系", "數位內容與科技學士學位學程"],
  },
] as const satisfies readonly (TextSection | EducationSection)[];

function isEducation(
  s: TextSection | EducationSection,
): s is EducationSection {
  return "school" in s;
}

/** 兩個區塊等高；圖片區與毛玻璃共用圓角 */
const SECTION_CARD =
  "flex min-h-[min(52vh,26rem)] flex-col rounded-xl border border-gray-100 bg-white px-5 py-6 shadow-md sm:min-h-[min(48vh,30rem)] sm:px-6 sm:py-8";

export default function About() {
  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-3 bg-sky-500/25 p-4">
      <h1 className="shrink-0 text-2xl font-bold text-gray-900">關於我</h1>

      <div className="min-h-0 flex-1 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col sm:gap-10">
          <div className="flex flex-col gap-8 px-6 pb-6 pt-6 sm:gap-10 sm:px-8 sm:pb-8 sm:pt-8">
            {SECTIONS.map((section) => (
              <section key={section.title} className={SECTION_CARD}>
                <h2 className="shrink-0 text-lg font-semibold text-gray-900">
                  {section.title}
                </h2>
                {isEducation(section) ? (
                  <div className="mt-4 flex min-h-0 flex-1 gap-3 leading-relaxed text-gray-900">
                    <span className="shrink-0 font-medium text-gray-900">
                      {section.school}
                    </span>
                    <div className="min-w-0 space-y-1">
                      {section.programs.map((line) => (
                        <p key={line} className="break-words">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {"imageSrc" in section && section.imageSrc ? (
                      <div className="mt-4 flex min-h-0 w-full flex-1 flex-col">
                        <div className="relative min-h-[12rem] w-full flex-1 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                          <Image
                            src={section.imageSrc}
                            alt={section.imageAlt ?? section.title}
                            fill
                            className="rounded-xl object-cover"
                            sizes="(max-width: 768px) 100vw, 560px"
                            priority
                          />
                          <div
                            className="absolute inset-0 rounded-xl bg-white/35 backdrop-blur-md"
                            aria-hidden
                          />
                          <p className="absolute inset-0 z-10 flex items-center justify-center whitespace-pre-line break-words rounded-xl p-4 text-center text-sm font-medium leading-relaxed text-white [text-shadow:0_1px_2px_rgb(75_85_99),0_2px_6px_rgb(55_65_81)] sm:p-6 sm:text-base">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="mt-4 whitespace-pre-line break-words leading-relaxed text-gray-600">
                        {section.description}
                      </p>
                    )}
                  </>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
