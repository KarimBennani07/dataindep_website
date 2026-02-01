"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateAccountPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const isValidEmail = useMemo(() => {
    // simple validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }, [email]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isValidEmail) return;

    // TODO: save email (store / API) then go next step
    router.push("/signup/freelance/experience");
  }

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16">
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

        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <h1 className="font-aptos text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Créez votre compte
            </h1>

            <p className="mt-4 font-aptos-light text-xl leading-relaxed text-zinc-600">
              Commencez par renseigner votre email. Vous pourrez compléter votre
              profil en quelques minutes.
            </p>

            <form onSubmit={onSubmit} className="mt-10">
              <label className="block text-sm font-medium text-zinc-700">
                Email
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom.nom@email.com"
                type="email"
                autoComplete="email"
                className="
                  mt-3 w-full
                  rounded-2xl border border-zinc-200 bg-white
                  px-5 py-4
                  font-aptos-light text-lg text-zinc-700
                  placeholder:text-zinc-400
                  outline-none
                  focus:border-[#0f3d2e]/40 focus:ring-2 focus:ring-[#0f3d2e]/10
                "
              />

              {/* Divider */}
              <div className="mt-6 flex items-center gap-4 text-sm text-zinc-400">
                <div className="h-px flex-1 bg-zinc-200" />
                <span>ou</span>
                <div className="h-px flex-1 bg-zinc-200" />
              </div>

              {/* Alternative (optional) */}
              <p className="mt-4 text-sm text-zinc-500">
                Vous avez déjà un compte ?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#0f3d2e] hover:underline"
                >
                  Connexion
                </Link>
              </p>

              {/* CTA */}
              <div className="mt-10 flex items-center justify-start">
                <button
                  type="submit"
                  disabled={!isValidEmail}
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
                  Suivant
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT */}
          <div className="md:pt-2">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
              <h2 className="font-aptos text-2xl font-bold text-zinc-900">
                Concentrez-vous sur vos missions
              </h2>

              <ul className="mt-6 space-y-5">
                <Benefit text="Accédez à des opportunités qualifiées auprès de grands comptes, ETI et scale-ups." />
                <Benefit text="Un collectif premium : validation du profil, positionnement et mise en relation." />
                <Benefit text="Un accompagnement orienté impact : gouvernance, analytics, IA, delivery." />
              </ul>

              {/* accent discret */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-[#0f3d2e]/10" />
              <div className="pointer-events-none absolute -bottom-28 right-10 h-48 w-48 rounded-full bg-emerald-500/10" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Benefit({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0f3d2e]/10 text-[#0f3d2e]">
        {/* check */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="font-aptos-light text-base leading-relaxed text-zinc-600">
        {text}
      </p>
    </li>
  );
}
