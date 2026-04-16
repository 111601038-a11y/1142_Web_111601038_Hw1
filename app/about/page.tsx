import Image from "next/image";

type TextSection = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};
type EducationSection = {
  title: string;
  schools: readonly string[];
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
    schools: ["國立政治大學","國立政治大學"],
    programs: ["法律學系", "數位內容與科技學士學位學程"],
  },
  {
    title: "其他經歷",
    schools: ["法律服務社","搭蘆灣社","政植涯"],
    programs: ["接待組", "三十週年主視覺規劃","副視覺設計長"],
  },
] as const satisfies readonly (TextSection | EducationSection)[];

function isEducation(
  s: TextSection | EducationSection,
): s is EducationSection {
  return "schools" in s;
}

/** 兩個區塊等高；圖片區與毛玻璃共用圓角 */
const SECTION_CARD =
  "flex min-h-[min(42vh,20rem)] flex-col rounded-xl border border-gray-100 bg-white px-4 py-4 shadow-md sm:min-h-[min(40vh,22rem)] sm:px-5 sm:py-5";

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
                  <div className="mt-4 min-h-0 flex-1 space-y-1 leading-relaxed text-gray-900">
                    {section.schools.map((school, index) => (
                      <div key={`${school}-${index}`} className="flex gap-3">
                        <p className="w-28 shrink-0 text-right font-medium text-gray-900">
                          {school}
                        </p>
                        <p className="min-w-0 break-words">
                          {section.programs[index] ?? ""}
                        </p>
                      </div>
                    ))}
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
