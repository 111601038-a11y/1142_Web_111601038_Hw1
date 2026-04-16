"use client";

import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="flex min-h-dvh w-full">
      <aside
        className="sticky top-0 hidden h-dvh w-80 shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white sm:flex"
        aria-label="側欄導覽"
      >
        <Menu />
      </aside>

      <div className="flex min-h-dvh min-w-0 flex-1 flex-col bg-sky-500/25">
        <header className="flex items-center gap-2 border-b border-gray-200 bg-white px-2 py-1.5 sm:hidden">
          <button
            type="button"
            className="rounded-md p-2 text-gray-800 hover:bg-gray-100"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">開啟選單</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-medium text-gray-700">選單</span>
        </header>

        <main className="min-h-0 flex-1">
          <div className="min-h-full w-full">{children}</div>
        </main>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 sm:hidden"
            aria-label="關閉選單"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-drawer"
            className="fixed inset-y-0 left-0 z-50 flex w-[min(20rem,85vw)] flex-col border-r border-gray-200 bg-white shadow-xl sm:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="導覽選單"
          >
            <div className="flex shrink-0 items-center justify-end border-b border-gray-100 px-2 py-1.5">
              <button
                type="button"
                className="rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                關閉
              </button>
            </div>
            <div
              className="min-h-0 flex-1 overflow-y-auto"
              onClick={(e) => {
                if ((e.target as HTMLElement).closest("a")) setOpen(false);
              }}
            >
              <Menu />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
