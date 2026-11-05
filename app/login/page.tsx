"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, setAdmin } = useAuthStore();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (email === "admin@withney.com" && password === "withney2026") {
      login({ name: "Admin", email });
      setAdmin(true);
      router.push("/admin");
      return;
    }
    if (email && password.length >= 6) {
      login({ name: email.split("@")[0], email });
      router.push("/collections");
      return;
    }
    setError("Invalid email or password.");
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px", width: "100%" }}>
      <div style={{ width: "100%", maxWidth: "440px" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ width: "36px", height: "36px", border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="font-[family-name:var(--font-cormorant)]" style={{ color: "#C9A96E", fontSize: "20px", fontWeight: 600 }}>W</span>
            </div>
            <span className="font-[family-name:var(--font-cormorant)]" style={{ color: "#F5F0E8", fontSize: "18px", letterSpacing: "0.3em", fontWeight: 300 }}>WITHNEY</span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "8px" }}>Welcome Back</h1>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(245,240,232,0.4)" }}>Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {[
            { label: "Email", type: "email", value: email, set: setEmail, placeholder: "your@email.com" },
            { label: "Password", type: "password", value: password, set: setPassword, placeholder: "••••••••" },
          ].map((field) => (
            <div key={field.label}>
              <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>{field.label}</label>
              <input type={field.type} required value={field.value} onChange={(e) => field.set(e.target.value)} placeholder={field.placeholder}
                style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(245,240,232,0.2)", padding: "12px 0", fontSize: "14px", color: "#F5F0E8", outline: "none", fontFamily: "inherit" }} />
            </div>
          ))}

          {error && <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(239,68,68,0.8)" }}>{error}</p>}

          <button type="submit" className="font-[family-name:var(--font-inter)]"
            style={{ width: "100%", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "20px", border: "none", cursor: "pointer" }}>
            Sign In
          </button>
        </form>

        {/* Links */}
        <div style={{ marginTop: "32px", textAlign: "center", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(245,240,232,0.4)" }}>
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: "#C9A96E", textDecoration: "none" }}>Create one</Link>
          </p>
          <Link href="/" className="font-[family-name:var(--font-inter)]"
            style={{ fontSize: "12px", color: "rgba(245,240,232,0.25)", textDecoration: "none" }}>
            Continue browsing without signing in →
          </Link>
        </div>

        {/* Admin hint */}
        <div style={{ marginTop: "48px", border: "1px solid rgba(201,169,110,0.1)", padding: "16px", textAlign: "center" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", color: "rgba(245,240,232,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Admin: admin@withney.com / withney2026
          </p>
        </div>

      </div>
    </div>
  );
}
