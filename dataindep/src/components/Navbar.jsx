"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="relative w-full border-b bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* GAUCHE */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Data Indep"
                width="140"
                height="36"
                style={{ height: "36px", width: "auto" }}
              />
            </Link>

            <MenuButton label="Entreprise" setOpenMenu={setOpenMenu} />
            <MenuButton label="Freelance" setOpenMenu={setOpenMenu} />
            <MenuButton label="Ressources" setOpenMenu={setOpenMenu} />
          </div>

          {/* DROITE */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium">
              Se connecter
            </Link>
            <Link
              href="/who-are-you"
              className="rounded-md bg-[#0f3d2e] px-4 py-2 text-sm font-medium text-white hover:bg-[#0c3326] transition-colors"
            >
              Créer mon compte
            </Link>

          </div>
        </div>
      </div>

      {/* MEGA MENU */}
      {openMenu && (
        <MegaMenu type={openMenu} close={() => setOpenMenu(null)} />
      )}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

function MenuButton({ label, setOpenMenu }) {
  return (
    <button
      onMouseEnter={() => setOpenMenu(label)}
      className="text-sm font-medium text-zinc-800 hover:text-black"
    >
      {label}
    </button>
  );
}

function MegaMenu({ type, close }) {
  return (
    <div
      onMouseLeave={close}
      className="absolute left-0 top-full w-full bg-white shadow-lg"
    >
      <div
        className="
          mx-auto max-w-6xl px-6 py-8
          font-aptos-light text-xl leading-relaxed text-zinc-600
        "
      >
        {type === "Entreprise" && <Entreprise />}
        {type === "Freelance" && <Freelance />}
        {type === "Ressources" && <Ressources />}
      </div>
    </div>
  );
}

/* ----------------------------- MENUS CONTENT ------------------------------ */

function Entreprise() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="rounded-lg bg-zinc-100 p-6">
        <h3 className="mb-2 font-semibold">Pourquoi Malt ?</h3>
        <p className="text-sm text-zinc-600">
          Malt est une marketplace qui vous permet de trouver des freelances
          qualifiés pour tous types de projets.
        </p>
      </div>

      <ul className="space-y-6">
        <li>
          <h4 className="font-medium">Engager des freelances</h4>
          <p className="text-sm text-zinc-600">
            Trouvez le bon profil via notre marketplace.
          </p>
        </li>
        <li>
          <h4 className="font-medium">
            Centraliser la gestion de ses freelances
          </h4>
          <p className="text-sm text-zinc-600">
            Simplifiez et consolidez toutes vos activités.
          </p>
        </li>
        <li>
          <h4 className="font-medium">Explorer les profils</h4>
          <p className="text-sm text-zinc-600">
            Cherchez par métier ou par ville.
          </p>
        </li>
      </ul>
    </div>
  );
}

function Freelance() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="rounded-lg bg-zinc-100 p-6">
        <h3 className="mb-2 font-semibold">Pourquoi Malt ?</h3>
        <p className="text-sm text-zinc-600">
          Rejoignez Malt pour recevoir des missions de qualité et être payé
          rapidement.
        </p>
      </div>

      <ul className="space-y-6">
        <li>
          <h4 className="font-medium">Community & Programmes</h4>
          <p className="text-sm text-zinc-600">
            Nous sommes là pour vous aider à vous développer.
          </p>
        </li>
        <li>
          <h4 className="font-medium">Nos partenaires</h4>
          <p className="text-sm text-zinc-600">
            Outils sélectionnés pour faciliter votre vie de freelance.
          </p>
        </li>
        <li>
          <h4 className="font-medium">Programme d’apport d’affaires</h4>
          <p className="text-sm text-zinc-600">
            Gagnez 5% du montant facturé.
          </p>
        </li>
      </ul>
    </div>
  );
}

function Ressources() {
  return (
    <ul className="space-y-6">
      <li className="font-medium">Articles</li>
      <li className="rounded-lg bg-zinc-100 p-4 font-medium">
        Événements
      </li>
      <li className="font-medium">Guides & études</li>
      <li className="font-medium">Success stories</li>
      <li className="font-medium">Collections</li>
      <li className="font-medium">Toutes les ressources</li>
    </ul>
  );
}
