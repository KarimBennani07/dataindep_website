import Image from "next/image";
import HeroSearch from "../components/HeroSearch";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
        {/* HAUT : texte + image */}
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* GAUCHE */}
          <div className="text-left">
            <h1 className="font-aptos text-5xl md:text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900">
              La plateforme{" "}
              <span className="inline-block rounded-md bg-[#0f3d2e] px-2 py-1 text-white">
                data
              </span>{" "}
              qui réunit les meilleurs experts.
            </h1>


            <p className="mt-6 font-aptos-light text-xl leading-relaxed text-zinc-600">
              15 000+ profils data sélectionnés. Une approche hybride entre
              plateforme de freelances et cabinet de conseil pour accélérer vos
              projets Data, Analytics & IA.
            </p>
          </div>

          {/* DROITE : photo moins haute */}
          <div className="relative w-[90%] max-w-lg mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <div className="relative h-[260px] sm:h-[300px] md:h-[340px] w-full">
                <Image
                  src="/home_page_freelance.jpg"
                  alt="Experts data indépendants"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-emerald-600/10" />
          </div>
        </div>

        {/* BAS : SEARCH FULL WIDTH */}
        <div className="mt-12">
          <div className="mx-auto w-full max-w-5xl">
            <HeroSearch />
          </div>
        </div>
      </div>
    </main>
  );
}
