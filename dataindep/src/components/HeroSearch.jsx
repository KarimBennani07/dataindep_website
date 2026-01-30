"use client";

import { useState } from "react";

export default function HeroSearch() {
  const [q, setQ] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("Search:", q);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl" role="search">
      <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm focus-within:border-zinc-400">
        <span className="select-none text-zinc-400" aria-hidden="true">
          ⌕
        </span>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher une expertise, un cas client, un sujet…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
          type="search"
        />

        <button
          type="submit"
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-black transition-colors"
        >
          Rechercher
        </button>
      </div>
    </form>
  );
}
