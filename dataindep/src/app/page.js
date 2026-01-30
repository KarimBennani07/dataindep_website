import HeroSearch from "../components/HeroSearch";


export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-16 text-center">
      <h1>
        <span className="font-aptos font-bold brand-primary">Data</span>{" "}
        <span className="font-aptos-light brand-primary">Indep</span>
      </h1>

      <p className="mt-4 text-sm text-zinc-600">
        Cabinet de conseil Data, Analytics & IA
      </p>

      <HeroSearch />
    </main>
  );
}
