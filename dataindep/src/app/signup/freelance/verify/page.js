"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function VerifyEmailPage() {
  const router = useRouter();

  // TODO: à brancher à ton flow (store / query param / session)
  const email = "prenom.nom@email.com";

  const [code, setCode] = useState("");

  const isValid = useMemo(() => code.length === 6, [code]);

  function onChange(e) {
    // garde uniquement des chiffres, max 6
    const digits = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(digits);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    // TODO: call API verify code
    router.push("/signup/freelance/experience");
  }

  return (
    <main className="relative min-h-screen">
      {/* fond doux */}
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

        {/* Card */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
            <h1 className="font-aptos text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
              Validez votre adresse email
            </h1>

            <p className="mt-3 font-aptos-light text-base leading-relaxed text-zinc-600">
              Saisissez le code à 6 chiffres envoyé à :{" "}
              <span className="font-medium text-zinc-900">{email}</span>
            </p>

            <form onSubmit={onSubmit} className="mt-8">
              <label className="block text-sm font-medium text-zinc-700">
                Code de validation
              </label>

              <input
                inputMode="numeric"
                autoComplete="one-time-code"
                value={code}
                onChange={onChange}
                placeholder="123456"
                className="
                  mt-3 w-full
                  rounded-2xl border border-zinc-200 bg-white
                  px-5 py-4
                  font-aptos-light text-xl tracking-[0.35em] text-zinc-900
                  placeholder:text-zinc-300
                  outline-none
                  focus:border-[#0f3d2e]/40 focus:ring-2 focus:ring-[#0f3d2e]/10
                "
              />

              <p className="mt-4 text-sm text-zinc-500">
                Ce code est valable pendant une heure.
              </p>

              <div className="mt-2 text-sm text-zinc-600">
                Vous n’avez pas reçu le code ?{" "}
                <button
                  type="button"
                  className="font-medium text-[#0f3d2e] hover:underline"
                  onClick={() => console.log("Resend code")}
                >
                  Demandez un nouveau code
                </button>{" "}
                ou{" "}
                <Link
                  href="/signup/freelance/account"
                  className="font-medium text-[#0f3d2e] hover:underline"
                >
                  modifier mon adresse email
                </Link>
              </div>

              {/* CTA */}
              <div className="mt-10 flex justify-end">
                <button
                  type="submit"
                  disabled={!isValid}
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
        </div>
      </div>
    </main>
  );
}
