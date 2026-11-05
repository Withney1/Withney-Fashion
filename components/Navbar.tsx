"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useCartStore } from "@/store/useCartStore";
import Cart from "@/components/Cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAdmin, logout } = useAuthStore();
  const { items, toggleCart } = useCartStore();

  const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between border-b border-[#C9A96E]/20 bg-[#0A0A0A]/90 backdrop-blur-sm">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-[#C9A96E] flex items-center justify-center group-hover:bg-[#C9A96E] transition-all duration-300">
            <span className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] group-hover:text-[#0A0A0A] text-xl font-semibold transition-colors duration-300">W</span>
          </div>
          <span className="font-[family-name:var(--font-cormorant)] text-[#F5F0E8] text-lg tracking-[0.3em] font-light">WITHNEY</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { label: "Collections", href: "/collections" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Refund Policy", href: "/refund-policy" },
          ].map((link) => (
            <li key={link.href} className="relative group">
              <Link href={link.href}
                className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] text-[#F5F0E8]/70 hover:text-[#C9A96E] transition-colors duration-300 uppercase">
                {link.label}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A96E] group-hover:w-full transition-all duration-300" />
            </li>
          ))}
          {isAdmin && (
            <li className="relative group">
              <Link href="/admin"
                className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] text-[#C9A96E] hover:text-[#F5F0E8] transition-colors duration-300 uppercase">
                Admin
              </Link>
            </li>
          )}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          {/* Cart */}
          <button onClick={toggleCart} className="relative group">
            <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/70 group-hover:text-[#C9A96E] transition-colors duration-300">
              Cart
            </span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 w-4 h-4 bg-[#C9A96E] text-[#0A0A0A] text-[9px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          {/* Auth */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40 tracking-widest">
                Hi, {user.name}
              </span>
              <button onClick={logout}
                className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-[#F5F0E8]/20 text-[#F5F0E8]/50 px-4 py-2 hover:border-red-500/40 hover:text-red-400 transition-all duration-300">
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/login"
              className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-[#C9A96E] text-[#C9A96E] px-5 py-2 hover:bg-[#C9A96E] hover:text-[#0A0A0A] transition-all duration-300">
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleCart} className="relative">
            <span className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/70">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 w-4 h-4 bg-[#C9A96E] text-[#0A0A0A] text-[9px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button className="flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#F5F0E8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden z-40">
            {[
              { label: "Collections", href: "/collections" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F0E8] hover:text-[#C9A96E] transition-colors duration-300">
                {link.label}
              </Link>
            ))}
            {user ? (
              <button onClick={() => { logout(); setMenuOpen(false); }}
                className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-red-500/30 text-red-400 px-6 py-3">
                Sign Out
              </button>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-[#C9A96E] text-[#C9A96E] px-6 py-3">
                Sign In
              </Link>
            )}
          </div>
        )}
      </nav>
      <Cart />
    </>
  );
}
