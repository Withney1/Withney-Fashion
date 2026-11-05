"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "128px 32px 96px" }}>

        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "24px" }}>Get In Touch</p>
          <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 0.95 }}>
            Let's <em style={{ color: "#C9A96E" }}>Talk.</em>
          </h1>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "80px" }}>

          {/* Info */}
          <div>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.5)", lineHeight: 1.9, marginBottom: "64px", maxWidth: "340px" }}>
              Whether you have a question about a piece, a collaboration idea, or just want to talk fashion — our team is here for it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {[
                { label: "Email", value: "hello@withney.com" },
                { label: "Phone", value: "+234 801 234 5678" },
                { label: "Location", value: "Lagos, Nigeria" },
                { label: "Hours", value: "Mon – Sat, 9am – 6pm WAT" },
              ].map((info) => (
                <div key={info.label} style={{ borderTop: "1px solid rgba(201,169,110,0.2)", paddingTop: "24px" }}>
                  <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "8px" }}>{info.label}</p>
                  <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.7)" }}>{info.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "48px" }}>
              <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "24px" }}>Follow Us</p>
              <div style={{ display: "flex", gap: "24px" }}>
                {["Instagram", "TikTok", "Pinterest"].map((s) => (
                  <a key={s} href="#" className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "12px", color: "rgba(245,240,232,0.4)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ border: "1px solid rgba(201,169,110,0.3)", padding: "80px 32px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "400px" }}>
                <div style={{ width: "48px", height: "48px", border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                  <span style={{ color: "#C9A96E", fontSize: "20px" }}>✓</span>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "28px", color: "#F5F0E8", marginBottom: "16px" }}>Message Received</h3>
                <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                {[
                  { label: "Full Name", type: "text", placeholder: "Your name" },
                  { label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { label: "Subject", type: "text", placeholder: "What's this about?" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} required
                      style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(245,240,232,0.2)", padding: "12px 0", fontSize: "14px", color: "#F5F0E8", outline: "none", fontFamily: "inherit" }} />
                  </div>
                ))}
                <div>
                  <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>Message</label>
                  <textarea rows={5} placeholder="Tell us everything..." required
                    style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(245,240,232,0.2)", padding: "12px 0", fontSize: "14px", color: "#F5F0E8", outline: "none", resize: "none", fontFamily: "inherit" }} />
                </div>
                <button type="submit" className="font-[family-name:var(--font-inter)]"
                  style={{ width: "100%", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "20px", border: "none", cursor: "pointer" }}>
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
