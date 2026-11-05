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
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "24px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(201,169,110,0.2)", backgroundColor: "rgba(10,10,10,0.92)", backdropFilter: "blur(8px)", width: "100%" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{ width: "36px", height: "36px", border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span className="font-[family-name:var(--font-cormorant)]" style={{ color: "#C9A96E", fontSize: "20px", fontWeight: 600 }}>W</span>
          </div>
          <span className="font-[family-name:var(--font-cormorant)]" style={{ color: "#F5F0E8", fontSize: "18px", letterSpacing: "0.3em", fontWeight: 300 }}>WITHNEY</span>
        </Link>

        {/* Desktop Nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: "40px", listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          {[
            { label: "Collections", href: "/collections" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Refund Policy", href: "/refund-policy" },
            ...(isAdmin ? [{ label: "Admin", href: "/admin" }] : []),
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-[family-name:var(--font-inter)]"
                style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: link.label === "Admin" ? "#C9A96E" : "rgba(245,240,232,0.7)", textDecoration: "none" }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }} className="hidden md:flex">
          <button onClick={toggleCart} style={{ position: "relative", background: "none", border: "none", cursor: "pointer" }}>
            <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.7)" }}>Cart</span>
            {itemCount > 0 && (
              <span style={{ position: "absolute", top: "-8px", right: "-12px", width: "16px", height: "16px", backgroundColor: "#C9A96E", color: "#0A0A0A", fontSize: "9px", fontWeight: "bold", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {itemCount}
              </span>
            )}
          </button>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", color: "rgba(245,240,232,0.4)" }}>Hi, {user.name}</span>
              <button onClick={logout} className="font-[family-name:var(--font-inter)]"
                style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(245,240,232,0.2)", color: "rgba(245,240,232,0.5)", padding: "8px 16px", background: "none", cursor: "pointer" }}>
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/login" className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #C9A96E", color: "#C9A96E", padding: "8px 20px", textDecoration: "none" }}>
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="flex md:hidden">
          <button onClick={toggleCart} style={{ position: "relative", background: "none", border: "none", cursor: "pointer" }}>
            <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", color: "rgba(245,240,232,0.7)", letterSpacing: "0.2em" }}>Cart</span>
            {itemCount > 0 && (
              <span style={{ position: "absolute", top: "-8px", right: "-12px", width: "16px", height: "16px", backgroundColor: "#C9A96E", color: "#0A0A0A", fontSize: "9px", fontWeight: "bold", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {itemCount}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "6px", padding: 0 }}>
            <span style={{ display: "block", width: "24px", height: "1px", backgroundColor: "#F5F0E8", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "1px", backgroundColor: "#F5F0E8", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "1px", backgroundColor: "#F5F0E8", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ position: "fixed", inset: 0, backgroundColor: "#0A0A0A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px", zIndex: 40 }}>
            {[
              { label: "Collections", href: "/collections" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-cormorant)]"
                style={{ fontSize: "36px", color: "#F5F0E8", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
            {user ? (
              <button onClick={() => { logout(); setMenuOpen(false); }}
                className="font-[family-name:var(--font-inter)]"
                style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(239,68,68,0.3)", color: "rgba(239,68,68,0.8)", padding: "12px 24px", background: "none", cursor: "pointer" }}>
                Sign Out
              </button>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}
                className="font-[family-name:var(--font-inter)]"
                style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #C9A96E", color: "#C9A96E", padding: "12px 24px", textDecoration: "none" }}>
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
