"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FreelanceExperiencePage() {
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  function onContinue() {
    if (!selected) return;
    // plus tard : save dans state global / cookie / backend
    router.push("/signup/freelance/skills");
  }

  return (
    <main className="relative min-h-screen">
      {/* fond doux */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16">
        {/* Progress */}
        <div className="mb-12 flex items-center gap-2 text-sm text-zinc-400">
          <span className="font-medium text-[#0f3d2e]">Présentation</span>
          <span>—</span>
          <span>Compétences</span>
          <span>—</span>
          <span>Préférences</span>
          <span>—</span>
          <span>Finalisation</span>
        </div>

        {/* Title */}
        <h1 className="font-aptos text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Votre niveau d’expérience en tant que consultant data
        </h1>

        <p className="mt-4 font-aptos-light text-xl leading-relaxed text-zinc-600">
          Cette information nous aide à vous proposer des missions adaptées à
          votre parcours.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ExperienceCard
            value="beginner"
            selected={selected}
            onSelect={setSelected}
            title="Je débute"
            description="Premières missions en data, analytics ou BI."
          />

          <ExperienceCard
            value="intermediate"
            selected={selected}
            onSelect={setSelected}
            title="J’ai réalisé plusieurs projets"
            description="Missions ponctuelles ou projets data significatifs."
          />

          <ExperienceCard
            value="advanced"
            selected={selected}
            onSelect={setSelected}
            title="J’ai des clients réguliers"
            description="Activité structurée avec missions récurrentes."
          />
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center justify-end">
          <button
            onClick={onContinue}
            disabled={!selected}
            className="
              rounded-xl
              bg-[#0f3d2e]
              px-8 py-3
              text-sm font-medium text-white
              hover:bg-[#0c3326]
              disabled:opacity-40 disabled:cursor-not-allowed
              transition
            "
          >
            Continuer
          </button>
        </div>
      </div>
    </main>
  );
}

function ExperienceCard({ value, title, description, selected, onSelect }) {
  const isActive = selected === value;

  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`
        text-left
        rounded-3xl border
        p-6
        transition
        ${
          isActive
            ? "border-[#0f3d2e] bg-[#0f3d2e]/5 shadow-[0_15px_40px_rgba(15,61,46,0.15)]"
            : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md"
        }
      `}
    >
      <h3 className="font-aptos text-xl font-semibold text-zinc-900">
        {title}
      </h3>

      <p className="mt-2 font-aptos-light text-base leading-relaxed text-zinc-600">
        {description}
      </p>
    </button>
  );
}
