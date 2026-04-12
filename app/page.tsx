export default function Home() {
  return (
    <div className="flex min-h-full w-full items-center justify-center p-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/40 shadow-xl">
        <div
          className="absolute inset-0 bg-gradient-to-br from-sky-100/80 via-white/40 to-indigo-100/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-white/35 backdrop-blur-lg"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[12rem] items-center justify-center px-8 py-14 text-center sm:min-h-[14rem] sm:py-16">
          <p className="text-balance text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
            歡迎來到我的個人網站
          </p>
        </div>
      </div>
    </div>
  );
}
