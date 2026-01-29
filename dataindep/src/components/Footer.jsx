import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-300 bg-white py-4 text-center">
      <Link
        href="/"
        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
      >
        © Data Indep — All rights reserved
      </Link>
    </footer>
  );
}
