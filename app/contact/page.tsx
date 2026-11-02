"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] text-[#C9A96E] uppercase mb-6">
            Get In Touch
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-[#F5F0E8] leading-none">
            Let's <em className="text-[#C9A96E]">Talk.</em>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Left — Info */}
          <div>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/50 leading-relaxed mb-16 max-w-sm">
              Whether you have a question about a piece, a collaboration idea, or just want to talk fashion — our team is here for it.
            </p>

            <div className="space-y-10">
              {[
                { label: "Email", value: "hello@withney.com" },
                { label: "Phone", value: "+234 801 234 5678" },
                { label: "Location", value: "Lagos, Nigeria" },
                { label: "Hours", value: "Mon – Sat, 9am – 6pm WAT" },
              ].map((info) => (
                <div key={info.label} className="border-t border-[#C9A96E]/20 pt-6">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-2">
                    {info.label}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/70">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-16">
              <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-6">
                Follow Us
              </p>
              <div className="flex gap-6">
                {["Instagram", "TikTok", "Pinterest"].map((s) => (
                  <a key={s} href="#"
                    className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40 hover:text-[#C9A96E] transition-colors duration-300 tracking-widest uppercase">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="border border-[#C9A96E]/30 p-16 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 border border-[#C9A96E] flex items-center justify-center mb-6">
                  <span className="text-[#C9A96E] text-xl">✓</span>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F0E8] mb-4">
                  Message Received
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/50">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { label: "Full Name", type: "text", placeholder: "Your name" },
                  { label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { label: "Subject", type: "text", placeholder: "What's this about?" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us everything..."
                    required
                    className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] py-5 hover:bg-[#F5F0E8] transition-all duration-300 mt-4">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
