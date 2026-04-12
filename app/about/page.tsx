type TextSection = { title: string; description: string };
type EducationSection = {
  title: string;
  school: string;
  programs: readonly string[];
};
type YoutubeSection = {
  title: string;
  /** 完整 YouTube 網址，或 11 碼的影片 ID */
  youtubeUrl: string;
  description?: string;
};

const SECTIONS = [
  {
    title: "我的SAPAH",
    description:
      "Sapah，在太魯閣語為「家」的意涵，歡迎和我一同探索這座山林。",
  },
  {
    title: "主要學歷",
    school: "國立政治大學",
    programs: ["法律學系", "數位內容與科技學士學位學程"],
  },
] as const satisfies readonly (
  | TextSection
  | EducationSection
  | YoutubeSection
)[];

function isEducation(
  s: TextSection | EducationSection | YoutubeSection,
): s is EducationSection {
  return "school" in s;
}

function isYoutube(
  s: TextSection | EducationSection | YoutubeSection,
): s is YoutubeSection {
  return "youtubeUrl" in s;
}

/** 從 watch?v=、youtu.be、/embed/ 網址或純 ID 取出 11 碼影片 ID */
function getYoutubeVideoId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  try {
    const u = new URL(trimmed);
    if (u.hostname === "youtu.be") {
      const id = u.pathname
        .replace(/^\//, "")
        .split(/[?&#]/)[0]
        .slice(0, 11);
      return id.length === 11 ? id : null;
    }
    const v = u.searchParams.get("v");
    if (v && v.length === 11) return v;
    const embed = u.pathname.match(/\/embed\/([\w-]{11})/);
    if (embed) return embed[1];
    const shorts = u.pathname.match(/\/shorts\/([\w-]{11})/);
    if (shorts) return shorts[1];
  } catch {
    return null;
  }
  return null;
}

export default function About() {
  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-3 bg-gray-200 p-4">
      <h1 className="shrink-0 text-2xl font-bold text-gray-900">關於我</h1>

      <div className="min-h-0 flex-1 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-8 p-6 sm:gap-10 sm:p-8">
          {SECTIONS.map((section) => (
            <section
              key={section.title}
              className="min-h-52 rounded-lg border border-gray-100 bg-white px-5 py-6 shadow-md sm:min-h-64 sm:px-6 sm:py-8"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h2>
              {isEducation(section) ? (
                <div className="mt-4 flex gap-3 leading-relaxed text-gray-600">
                  <span className="shrink-0 text-gray-700">{section.school}</span>
                  <div className="min-w-0 space-y-1">
                    {section.programs.map((line) => (
                      <p key={line} className="break-words">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ) : isYoutube(section) ? (
                <div className="mt-4 space-y-4">
                  {section.description ? (
                    <p className="whitespace-pre-line break-words leading-relaxed text-gray-600">
                      {section.description}
                    </p>
                  ) : null}
                  {(() => {
                    const id = getYoutubeVideoId(section.youtubeUrl);
                    if (!id) {
                      return (
                        <p className="text-sm text-red-600">
                          無法解析 YouTube 連結，請使用 watch、youtu.be 或 embed
                          網址。
                        </p>
                      );
                    }
                    const watchUrl = `https://www.youtube.com/watch?v=${id}`;
                    const embedUrl = `https://www.youtube.com/embed/${id}?rel=0`;
                    return (
                      <div className="w-full">
                        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-black shadow-md">
                          <div className="relative aspect-video w-full">
                            <iframe
                              className="absolute inset-0 h-full w-full"
                              src={embedUrl}
                              title="YouTube 影片預覽"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              referrerPolicy="strict-origin-when-cross-origin"
                            />
                          </div>
                        </div>
                        <p className="mt-2 text-center text-sm text-gray-500">
                          <a
                            href={watchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-gray-400 underline-offset-2 hover:text-gray-800"
                          >
                            在 YouTube 開啟
                          </a>
                        </p>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                <p className="mt-4 whitespace-pre-line break-words leading-relaxed text-gray-600">
                  {section.description}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
