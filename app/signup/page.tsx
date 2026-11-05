"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuthStore();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    login({ name, email });
    router.push("/collections");
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
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F0E8] font-light mb-2">Create Account</h1>
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40 tracking-widest">Join the Withney community</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {[
            { label: "Full Name", type: "text", value: name, set: setName, placeholder: "Your name" },
            { label: "Email Address", type: "email", value: email, set: setEmail, placeholder: "your@email.com" },
            { label: "Password", type: "password", value: password, set: setPassword, placeholder: "Min. 6 characters" },
            { label: "Confirm Password", type: "password", value: confirm, set: setConfirm, placeholder: "Repeat password" },
          ].map((field) => (
            <div key={field.label}>
              <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">
                {field.label}
              </label>
              <input
                type={field.type}
                required
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                placeholder={field.placeholder}
                className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300"
              />
            </div>
          ))}

          {error && (
            <p className="font-[family-name:var(--font-inter)] text-xs text-red-400">{error}</p>
          )}

          <button
            type="submit"
            className="w-full font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] py-5 hover:bg-[#F5F0E8] transition-all duration-300">
            Create Account
          </button>
        </form>

        {/* Links */}
        <div className="mt-8 text-center space-y-4">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40">
            Already have an account?{" "}
            <Link href="/login" className="text-[#C9A96E] hover:text-[#F5F0E8] transition-colors duration-300">
              Sign in
            </Link>
          </p>
          <Link href="/" className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 transition-colors duration-300 block">
            Continue browsing without signing in →
          </Link>
        </div>

      </div>
    </div>
  );
}
