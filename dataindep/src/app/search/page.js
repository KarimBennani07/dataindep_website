"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const MOCK_PROFILES = [
  {
    id: "1",
    name: "Ange",
    title: "Expert Data | Azure | Databricks | SQL",
    rate: 750,
    location: "Paris",
    years: 7,
    tags: ["Data Engineer", "Azure", "Databricks", "Python", "SQL"],
    available: true,
    avatar: "/home_page_freelance.jpg",
  },
  {
    id: "2",
    name: "Valentin",
    title: "Consultant Data | Analyse | Python | Cloud",
    rate: 690,
    location: "Paris",
    years: 5,
    tags: ["Python", "GCP", "SQL", "Data viz"],
    available: true,
    avatar: "/home_page_freelance.jpg",
  },
  {
    id: "3",
    name: "Mélchior",
    title: "IA Générative & Data Fullstack",
    rate: 850,
    location: "Lyon",
    years: 9,
    tags: ["GenAI", "Data Science", "dbt", "Spark"],
    available: false,
    avatar: "/home_page_freelance.jpg",
  },
  {
    id: "4",
    name: "Pierre-Baptiste",
    title: "Growth & Automatisation | Scraping Data | IA",
    rate: 450,
    location: "Remote",
    years: 10,
    tags: ["Web scraping", "Automation", "Email", "Data"],
    available: true,
    avatar: "/home_page_freelance.jpg",
  },
];

export default function SearchPage() {
  const [q, setQ] = useState("data");
  const [place, setPlace] = useState("");
  const [minRate, setMinRate] = useState(200);
  const [maxRate, setMaxRate] = useState(1200);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [exp, setExp] = useState({
    junior: false, // 0-2
    mid: true,     // 3-7
    senior: true,  // 8+
  });
  const [selectedTags, setSelectedTags] = useState({
    Python: true,
    SQL: false,
    "Data Engineer": false,
    "Data Science": false,
    "Power BI": false,
    "Data Governance": false,
  });

  const total = useMemo(() => filtered().length, []); // placeholder, replaced below

  const profiles = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    const placeLower = place.trim().toLowerCase();

    return MOCK_PROFILES.filter((p) => {
      // query
      const inQuery =
        !qLower ||
        p.title.toLowerCase().includes(qLower) ||
        p.tags.join(" ").toLowerCase().includes(qLower);

      // place
      const inPlace =
        !placeLower ||
        p.location.toLowerCase().includes(placeLower) ||
        (placeLower === "remote" && p.location.toLowerCase() === "remote");

      // rate
      const inRate = p.rate >= minRate && p.rate <= maxRate;

      // availability
      const inAvail = !onlyAvailable || p.available;

      // exp buckets
      const inExp =
        (exp.junior && p.years <= 2) ||
        (exp.mid && p.years >= 3 && p.years <= 7) ||
        (exp.senior && p.years >= 8);

      // tags
      const activeTags = Object.entries(selectedTags)
        .filter(([, v]) => v)
        .map(([k]) => k);

      const inTags =
        activeTags.length === 0 ||
        activeTags.some((t) => p.tags.map((x) => x.toLowerCase()).includes(t.toLowerCase()));

      return inQuery && inPlace && inRate && inAvail && inExp && inTags;
    });
  }, [q, place, minRate, maxRate, onlyAvailable, exp, selectedTags]);

  function resetFilters() {
    setMinRate(200);
    setMaxRate(1200);
    setOnlyAvailable(false);
    setExp({ junior: false, mid: true, senior: true });
    setSelectedTags({
      Python: true,
      SQL: false,
      "Data Engineer": false,
      "Data Science": false,
      "Power BI": false,
      "Data Governance": false,
    });
  }

  return (
    <main className="min-h-screen bg-white">
      {/* TOP BAR */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
            {/* Query */}
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-3">
              <span className="text-zinc-400" aria-hidden="true">⌕</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Rechercher une expertise, une techno, un profil…"
                className="w-full bg-transparent outline-none font-aptos-light text-base text-zinc-700 placeholder:text-zinc-400"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  className="text-zinc-400 hover:text-zinc-600"
                  aria-label="Clear"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Location */}
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-3">
              <span className="text-zinc-400" aria-hidden="true">⌁</span>
              <input
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Lieu de la mission (ex: Paris, Remote)"
                className="w-full bg-transparent outline-none font-aptos-light text-base text-zinc-700 placeholder:text-zinc-400"
              />
            </div>

            {/* CTA */}
            <button className="rounded-2xl bg-[#0f3d2e] px-6 py-3 text-sm font-medium text-white hover:bg-[#0c3326] transition">
              Rechercher
            </button>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* FILTERS */}
          <aside className="rounded-3xl border border-zinc-200 bg-white p-6 h-fit">
            <div className="flex items-center justify-between">
              <h2 className="font-aptos text-lg font-bold text-zinc-900">Filtres</h2>
              <button
                onClick={resetFilters}
                className="text-sm font-medium text-[#0f3d2e] hover:underline"
              >
                Réinitialiser
              </button>
            </div>

            {/* Rate */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-zinc-900">TJM (€ / jour)</h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <input
                  type="number"
                  value={minRate}
                  onChange={(e) => setMinRate(Number(e.target.value || 0))}
                  className="rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#0f3d2e]/40"
                  placeholder="Min"
                />
                <input
                  type="number"
                  value={maxRate}
                  onChange={(e) => setMaxRate(Number(e.target.value || 0))}
                  className="rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#0f3d2e]/40"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6">
              <label className="flex items-center gap-3 text-sm text-zinc-700">
                <input
                  type="checkbox"
                  checked={onlyAvailable}
                  onChange={(e) => setOnlyAvailable(e.target.checked)}
                  className="h-4 w-4 rounded border-zinc-300 text-[#0f3d2e] focus:ring-[#0f3d2e]/20"
                />
                Disponibilité confirmée
              </label>
            </div>

            {/* Experience */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-zinc-900">Niveau d’expérience</h3>
              <div className="mt-3 space-y-3 text-sm text-zinc-700">
                <Check
                  label="0–2 ans"
                  checked={exp.junior}
                  onChange={(v) => setExp((s) => ({ ...s, junior: v }))}
                />
                <Check
                  label="3–7 ans"
                  checked={exp.mid}
                  onChange={(v) => setExp((s) => ({ ...s, mid: v }))}
                />
                <Check
                  label="8 ans et +"
                  checked={exp.senior}
                  onChange={(v) => setExp((s) => ({ ...s, senior: v }))}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-zinc-900">Spécialités</h3>
              <div className="mt-3 space-y-3 text-sm text-zinc-700">
                {Object.keys(selectedTags).map((k) => (
                  <Check
                    key={k}
                    label={k}
                    checked={selectedTags[k]}
                    onChange={(v) => setSelectedTags((s) => ({ ...s, [k]: v }))}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* RESULTS */}
          <section>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h1 className="font-aptos text-2xl font-bold text-zinc-900">
                  {profiles.length} profils disponibles
                </h1>
                <p className="mt-1 font-aptos-light text-base text-zinc-600">
                  Matching premium Data, Analytics & IA — sélection Data Indep.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {profiles.map((p) => (
                <ProfileCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ProfileCard({ p }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition">
      <div className="relative h-40 w-full">
        <Image src={p.avatar} alt={p.name} fill className="object-cover" />
        {p.available && (
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Disponibilité confirmée
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-aptos text-base font-bold text-zinc-900">{p.name}</h3>
            <p className="mt-1 text-sm text-zinc-600">{p.title}</p>
          </div>
          <button className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-600 hover:bg-zinc-50">
            ♡
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-600">
          <span className="font-medium text-zinc-900">{p.rate} € / jour</span>
          <span className="text-zinc-300">•</span>
          <span>{p.location}</span>
          <span className="text-zinc-300">•</span>
          <span>{p.years} ans</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#0f3d2e]/10 px-3 py-1 text-xs font-medium text-[#0f3d2e]"
            >
              {t}
            </span>
          ))}
        </div>

        <button className="mt-5 w-full rounded-2xl bg-[#0f3d2e] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0c3326] transition">
          Voir le profil
        </button>
      </div>
    </article>
  );
}

function Check({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-zinc-300 text-[#0f3d2e] focus:ring-[#0f3d2e]/20"
      />
      <span>{label}</span>
    </label>
  );
}
