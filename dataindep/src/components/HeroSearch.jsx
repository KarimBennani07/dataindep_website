"use client";

import { useState } from "react";

export default function HeroSearch() {
  const [q, setQ] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("Search:", q);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 w-full max-w-5xl" role="search">
      <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.07)] focus-within:border-zinc-400">
        <span className="select-none text-zinc-400 text-lg" aria-hidden="true">
          ⌕
        </span>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher une expertise, un cas client, un sujet…"
          type="search"
          className="w-full bg-transparent outline-none font-aptos-light text-lg leading-relaxed text-zinc-600 placeholder:text-zinc-400"
        />

        <button
          type="submit"
          className="rounded-xl bg-[#0f3d2e] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#0c3326] transition-colors whitespace-nowrap"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
