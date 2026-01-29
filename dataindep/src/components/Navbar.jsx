import Link from "next/link";

export default function Navbar_data_indep() {
  return (
    <nav className="w-full border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-center gap-10">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-800 hover:text-black transition-colors"
          >
            Accueil
          </Link>

          <Link
            href="/expertises"
            className="text-sm font-medium text-zinc-800 hover:text-black transition-colors"
          >
            Expertises
          </Link>

          <Link
            href="/references"
            className="text-sm font-medium text-zinc-800 hover:text-black transition-colors"
          >
            Références
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-800 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
