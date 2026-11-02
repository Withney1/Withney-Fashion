"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between border-b border-[#C9A96E]/20 bg-[#0A0A0A]/90 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-9 h-9 border border-[#C9A96E] flex items-center justify-center">
          <span className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-xl font-semibold">W</span>
        </div>
        <span className="font-[family-name:var(--font-cormorant)] text-[#F5F0E8] text-lg tracking-[0.3em] font-light">WITHNEY</span>
      </Link>

      <ul className="hidden md:flex items-center gap-10">
        {[{ label: "Collections", href: "/collections" },{ label: "About", href: "/about" },{ label: "Contact", href: "/contact" }].map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] text-[#F5F0E8]/70 hover:text-[#C9A96E] transition-colors duration-300 uppercase">{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex">
        <Link href="/collections" className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-[#C9A96E] text-[#C9A96E] px-5 py-2 hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-300">Shop Now</Link>
      </div>

      <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10 md:hidden">
          {[{ label: "Collections", href: "/collections" },{ label: "About", href: "/about" },{ label: "Contact", href: "/contact" }].map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F0E8] hover:text-[#C9A96E] transition-colors duration-300">{link.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
