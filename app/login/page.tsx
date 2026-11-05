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

    // Admin check
    if (email === "admin@withney.com" && password === "withney2026") {
      login({ name: "Admin", email });
      setAdmin(true);
      router.push("/admin");
      return;
    }

    // Basic user login (demo)
    if (email && password.length >= 6) {
      login({ name: email.split("@")[0], email });
      router.push("/collections");
      return;
    }

    setError("Invalid email or password.");
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-9 h-9 border border-[#C9A96E] flex items-center justify-center">
              <span className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-xl font-semibold">W</span>
            </div>
            <span className="font-[family-name:var(--font-cormorant)] text-[#F5F0E8] text-lg tracking-[0.3em] font-light">WITHNEY</span>
          </div>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F0E8] font-light mb-2">Welcome Back</h1>
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40 tracking-widest">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300"
            />
          </div>

          <div>
            <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300"
            />
          </div>

          {error && (
            <p className="font-[family-name:var(--font-inter)] text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            className="w-full font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] py-5 hover:bg-[#F5F0E8] transition-all duration-300">
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="mt-8 text-center space-y-4">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#C9A96E] hover:text-[#F5F0E8] transition-colors duration-300">
              Create one
            </Link>
          </p>
          <Link href="/" className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors duration-300 block">
            Continue browsing without signing in →
          </Link>
        </div>

        {/* Admin hint */}
        <div className="mt-12 border border-[#C9A96E]/10 p-4 text-center">
          <p className="font-[family-name:var(--font-inter)] text-[10px] text-[#F5F0E8]/20 tracking-widest uppercase">
            Admin: admin@withney.com / withney2026
          </p>
        </div>

      </div>
    </div>
  );
}
