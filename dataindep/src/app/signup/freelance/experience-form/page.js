"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExperienceFormPage() {
  const router = useRouter();

  // Form state
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(""); // YYYY-MM
  const [end, setEnd] = useState("");     // YYYY-MM
  const [isFreelance, setIsFreelance] = useState(false);
  const [isCurrent, setIsCurrent] = useState(false);

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  const [saved, setSaved] = useState(false);

  const descCount = description.length;

  const canSave = useMemo(() => {
    if (!company.trim()) return false;
    if (!title.trim()) return false;
    if (!start) return false;
    if (!isCurrent && !end) return false;
    if (description.trim().length < 100) return false;
    return true;
  }, [company, title, start, end, isCurrent, description]);

  function onSave() {
    if (!canSave) return;

    // TODO: envoyer vers API / DB / store
    console.log("Saved experience:", {
      company,
      title,
      start,
      end: isCurrent ? null : end,
      isFreelance,
      isCurrent,
      description,
      location,
      industry,
    });

    setSaved(true);
  }

  function onCancel() {
    // reset + retour état non enregistré
    setCompany("");
    setTitle("");
    setStart("");
    setEnd("");
    setIsFreelance(false);
    setIsCurrent(false);
    setDescription("");
    setLocation("");
    setIndustry("");
    setSaved(false);
  }

  function onNext() {
    if (!saved) return;
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
          Ajoutez vos expériences professionnelles
        </h1>

        <p className="mt-4 font-aptos-light text-xl leading-relaxed text-zinc-600">
          Commencez par ajouter une première expérience. Vous pourrez en ajouter
          d’autres ensuite.
        </p>

        {/* Info banner */}
        <div className="mt-8 rounded-2xl border border-[#0f3d2e]/20 bg-[#0f3d2e]/5 px-5 py-4">
          <p className="text-sm text-zinc-700">
            Conseil : décrivez vos missions, vos responsabilités et les impacts
            mesurables (KPIs, gains, livrables).
          </p>
        </div>

        {/* Form card */}
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
          {/* Company */}
          <Field label="Société" required>
            <input
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                setSaved(false);
              }}
              placeholder="Ex : L’Oréal"
              className={inputCls}
            />
          </Field>

          {/* Title */}
          <Field label="Titre" required className="mt-6">
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setSaved(false);
              }}
              placeholder="Ex : Senior Data Analyst"
              className={inputCls}
            />
          </Field>

          {/* Dates */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Field label="Date de début" required>
              <input
                type="month"
                value={start}
                onChange={(e) => {
                  setStart(e.target.value);
                  setSaved(false);
                }}
                className={inputCls}
              />
            </Field>

            <Field label="Date de fin" required={!isCurrent}>
              <input
                type="month"
                value={end}
                onChange={(e) => {
                  setEnd(e.target.value);
                  setSaved(false);
                }}
                disabled={isCurrent}
                className={[
                  inputCls,
                  isCurrent ? "bg-zinc-50 text-zinc-400 cursor-not-allowed" : "",
                ].join(" ")}
              />
            </Field>
          </div>

          {/* Checkboxes */}
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Check
              checked={isFreelance}
              onChange={(v) => {
                setIsFreelance(v);
                setSaved(false);
              }}
              label="En freelance"
            />
            <Check
              checked={isCurrent}
              onChange={(v) => {
                setIsCurrent(v);
                if (v) setEnd("");
                setSaved(false);
              }}
              label="J’occupe actuellement ce poste"
            />
          </div>

          {/* Description */}
          <div className="mt-6">
            <div className="flex items-end justify-between">
              <label className="text-sm font-medium text-zinc-700">
                Description <span className="text-zinc-400">*</span>
              </label>
              <span className="text-xs text-zinc-400">{descCount}/2000</span>
            </div>

            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value.slice(0, 2000));
                setSaved(false);
              }}
              rows={7}
              placeholder="Listez quelques éléments clés : contexte, responsabilités, livrables, résultats, KPIs…"
              className={[
                inputCls,
                "mt-3 resize-none",
              ].join(" ")}
            />

            <p className="mt-2 text-xs text-zinc-500">
              Minimum 100 caractères.
            </p>
          </div>

          {/* Optional */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Field label="Lieu" optional>
              <input
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setSaved(false);
                }}
                placeholder="Ville"
                className={inputCls}
              />
            </Field>

            <Field label="Secteur d’activité" optional>
              <select
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                  setSaved(false);
                }}
                className={inputCls}
              >
                <option value="">Sélectionner…</option>
                <option value="CPG">CPG / FMCG</option>
                <option value="Retail">Retail</option>
                <option value="Luxury">Luxury</option>
                <option value="Tech">Tech</option>
                <option value="Finance">Finance</option>
                <option value="Industry">Industrie</option>
                <option value="Other">Autre</option>
              </select>
            </Field>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition"
            >
              Annuler
            </button>

            <button
              type="button"
              onClick={onSave}
              disabled={!canSave}
              className="rounded-xl bg-[#0f3d2e] px-6 py-3 text-sm font-medium text-white hover:bg-[#0c3326] disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Enregistrer
            </button>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition"
          >
            Retour
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={!saved}
            className="rounded-xl bg-[#0f3d2e] px-8 py-3 text-sm font-medium text-white hover:bg-[#0c3326] disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            Suivant
          </button>
        </div>
      </div>
    </main>
  );
}

/* ----------------------------- UI helpers ----------------------------- */

const inputCls =
  "w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-aptos-light text-base text-zinc-700 placeholder:text-zinc-400 outline-none focus:border-[#0f3d2e]/40 focus:ring-2 focus:ring-[#0f3d2e]/10";

function Field({ label, required, optional, children, className = "" }) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-zinc-700">
        {label}{" "}
        {required ? (
          <span className="text-zinc-400">*</span>
        ) : optional ? (
          <span className="text-zinc-400">— optionnel</span>
        ) : null}
      </label>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Check({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-3 text-sm text-zinc-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-zinc-300 text-[#0f3d2e] focus:ring-[#0f3d2e]/20"
      />
      <span className="font-aptos-light">{label}</span>
    </label>
  );
}
