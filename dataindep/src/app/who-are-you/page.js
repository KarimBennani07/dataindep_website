import Link from "next/link";

export default function SignupChoicePage() {
  return (
    <main className="relative min-h-[calc(100vh-64px)]">
      {/* fond doux */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16">
        {/* Titre */}
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-[#0f3d2e]/10 px-4 py-1 text-sm font-medium text-[#0f3d2e]">
            Inscrivez-vous
          </p>

          <h1 className="mt-6 font-aptos text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Quel type de compte souhaitez-vous créer ?
          </h1>

          <p className="mt-4 font-aptos-light text-xl leading-relaxed text-zinc-600">
            Choisissez votre espace pour accéder à l’expérience Data Indep.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Entreprise */}
          <ChoiceCard
            title="Entreprise"
            subtitle="Je cherche des experts data"
            description="Accédez à 15 000+ profils data sélectionnés et lancez vos besoins rapidement."
            href="/signup/company"
            icon={
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0f3d2e]/10 text-[#0f3d2e]">
                {/* building icon (simple) */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 20V6a2 2 0 0 1 2-2h7v16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 20h9V10a2 2 0 0 0-2-2h-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 8h1M7 11h1M7 14h1M15 12h1M15 15h1M15 18h1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            }
            cta="Trouver un consultant"
          />

          {/* Freelance */}
          <ChoiceCard
            title="Freelance"
            subtitle="Je crée mon profil"
            description="Rejoignez un collectif premium et recevez des missions Data, Analytics & IA."
            href="/signup/freelance/experience-level"
            icon={
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0f3d2e]/10 text-[#0f3d2e]">
                {/* user icon (simple) */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21a8 8 0 1 0-16 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            }
            cta="Créer mon profil"
          />
        </div>

        {/* Footer links */}
        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">
            Vous avez déjà un compte ?{" "}
            <Link href="/login" className="font-medium text-[#0f3d2e] hover:underline">
              Connexion
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

function ChoiceCard({ title, subtitle, description, href, icon, cta }) {
  return (
    <Link
      href={href}
      className="
        group block
        rounded-3xl border border-zinc-200 bg-white
        p-7
        shadow-[0_12px_40px_rgba(0,0,0,0.06)]
        transition
        hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f3d2e]/30
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          {icon}
          <div>
            <h2 className="font-aptos text-2xl font-bold text-zinc-900">
              {title}
            </h2>
            <p className="mt-1 font-aptos-light text-base text-zinc-600">
              {subtitle}
            </p>
          </div>
        </div>

        <span className="mt-2 text-zinc-300 transition group-hover:text-zinc-500">
          →
        </span>
      </div>

      <p className="mt-5 font-aptos-light text-base leading-relaxed text-zinc-600">
        {description}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0f3d2e] px-5 py-2.5 text-sm font-medium text-white transition group-hover:bg-[#0c3326]">
        {cta}
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
