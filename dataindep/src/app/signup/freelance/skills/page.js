"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SkillsImportPage() {
  const router = useRouter();
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  function onPickFile() {
    inputRef.current?.click();
  }

  function onFileSelected(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
  }

  function onDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    setFile(f);
  }

  function onDragOver(e) {
    e.preventDefault();
    setDragOver(true);
  }

  function onDragLeave() {
    setDragOver(false);
  }

  function onImport() {
    if (!file) return;

    // TODO: upload du fichier (API route / storage)
    console.log("Import file:", file.name);

    router.push("/signup/freelance/preferences");
  }

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
        {/* Progress */}
        <div className="mb-12 flex items-center gap-2 text-sm text-zinc-400">
          <span>Présentation</span>
          <span>—</span>
          <span className="font-medium text-[#0f3d2e]">Compétences</span>
          <span>—</span>
          <span>Préférences</span>
          <span>—</span>
          <span>Finalisation</span>
        </div>

        {/* Title */}
        <h1 className="font-aptos text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Créez votre profil à partir d’un CV
        </h1>

        <p className="mt-4 font-aptos-light text-xl leading-relaxed text-zinc-600">
          Vous pourrez modifier chaque élément plus tard.
        </p>

        {/* Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Dropzone */}
          <div>
            <div
              onClick={onPickFile}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              role="button"
              tabIndex={0}
              className={[
                "group cursor-pointer rounded-3xl border-2 border-dashed bg-white p-10 text-center transition",
                dragOver
                  ? "border-[#0f3d2e] bg-[#0f3d2e]/5"
                  : "border-zinc-200 hover:border-zinc-300",
              ].join(" ")}
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-zinc-100 text-zinc-700">
                <span className="text-2xl">+</span>
              </div>

              <p className="mt-6 font-aptos text-lg font-semibold text-zinc-900">
                Déposez ici votre fichier
              </p>

              <p className="mt-2 font-aptos-light text-base text-zinc-600">
                {file ? (
                  <>
                    Fichier sélectionné :{" "}
                    <span className="font-medium text-zinc-900">
                      {file.name}
                    </span>
                  </>
                ) : (
                  "PDF recommandé. Import rapide et sécurisé."
                )}
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                Formats acceptés : pdf, doc, docx
              </p>

              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={onFileSelected}
              />
            </div>

            {/* Manual CV */}
            <div className="mt-8">
              <Link
                href="/signup/freelance/manual"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl border border-[#0f3d2e]
                  bg-white px-6 py-3
                  text-sm font-medium text-[#0f3d2e]
                  hover:bg-[#0f3d2e]/5
                  transition
                "
              >
                Créer mon profil manuellement
              </Link>
            </div>
          </div>

          {/* Right card */}
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0f3d2e]/10 text-[#0f3d2e]">
                  {/* linkedin-like icon (simple) */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 8v12M4 6.5v.2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 11v9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 12.5c1-1.5 2.3-2.2 3.8-2.2 2.3 0 4.2 1.6 4.2 5V20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h2 className="font-aptos text-xl font-bold text-zinc-900">
                    Pas de CV ?
                  </h2>
                  <p className="mt-1 font-aptos-light text-base leading-relaxed text-zinc-600">
                    Importez vos expériences depuis votre profil LinkedIn (ou
                    copiez-collez vos informations).
                  </p>
                </div>
              </div>

              {/* Visuel placeholder (optionnel) */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                <div className="relative h-44 w-full">
                  <Image
                    src="/globe.svg"
                    alt="Data Indep"
                    fill
                    className="object-contain p-10 opacity-80"
                  />
                </div>
              </div>

              <p className="mt-6 text-sm text-zinc-500">
                Conseil : exportez votre profil en PDF depuis LinkedIn pour un
                import plus fiable.
              </p>

              {/* Accent */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-[#0f3d2e]/10" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-end">
          <button
            onClick={onImport}
            disabled={!file}
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
            Importer
          </button>
        </div>
      </div>
    </main>
  );
}
