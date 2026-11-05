import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", width: "100%", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", paddingTop: "96px", width: "100%" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "repeating-linear-gradient(0deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 80px)" }} />
        <div style={{ position: "relative", zIndex: 20, textAlign: "center", padding: "0 24px", width: "100%", maxWidth: "900px", margin: "0 auto" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A96E", marginBottom: "32px", textTransform: "uppercase" }}>
            New Collection — 2026
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", lineHeight: 0.9, fontWeight: 300, color: "#F5F0E8", marginBottom: "32px" }}>
            Wear Your<br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Nerve</em>
          </h1>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.5)", maxWidth: "420px", margin: "0 auto 48px", lineHeight: 1.8 }}>
            Luxury unisex fashion that challenges every convention. Designed for those who dress with intention.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link href="/collections" className="font-[family-name:var(--font-inter)] hero-btn-primary"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "16px 40px", display: "inline-block", textDecoration: "none" }}>
              Explore Collections
            </Link>
            <Link href="/about" className="font-[family-name:var(--font-inter)] hero-btn-secondary"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(245,240,232,0.3)", color: "#F5F0E8", padding: "16px 40px", display: "inline-block", textDecoration: "none" }}>
              Our Story
            </Link>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(245,240,232,0.3)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)" }} />
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{ borderTop: "1px solid rgba(201,169,110,0.2)", borderBottom: "1px solid rgba(201,169,110,0.2)", padding: "20px 0", overflow: "hidden", width: "100%" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: "48px", whiteSpace: "nowrap" }}>
          {Array(8).fill(["LUXURY", "UNISEX", "BOLD", "CHEEKY", "WITHNEY", "2026"]).flat().map((word, i) => (
            <span key={i} className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "24px", color: "rgba(201,169,110,0.4)", fontStyle: "italic", flexShrink: 0 }}>
              {word} &nbsp;—&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED DROPS */}
      <section style={{ width: "100%", padding: "96px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px" }}>
            <h2 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.1 }}>
              Featured<br /><em style={{ color: "#C9A96E" }}>Drops</em>
            </h2>
            <Link href="/collections" className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.4)", textDecoration: "none" }}>
              View All
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { name: "The Noir Overcoat", price: "₦185,000", tag: "Bestseller" },
              { name: "Sculpted Leather Trousers", price: "₦92,000", tag: "New" },
              { name: "The Void Shirt", price: "₦48,000", tag: "Limited" },
            ].map((item, i) => (
              <div key={i} style={{ cursor: "pointer" }}>
                <div style={{ position: "relative", aspectRatio: "3/4", backgroundColor: "#111", overflow: "hidden", marginBottom: "16px", border: "1px solid rgba(201,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "7rem", color: "rgba(201,169,110,0.08)", fontWeight: 300 }}>W</span>
                  <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                    <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "4px 12px" }}>
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "20px", color: "#F5F0E8", marginBottom: "4px" }}>{item.name}</h3>
                <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "#C9A96E" }}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ borderTop: "1px solid rgba(201,169,110,0.2)", borderBottom: "1px solid rgba(201,169,110,0.2)", padding: "96px 32px", width: "100%" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2rem, 5vw, 5rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 1.2, marginBottom: "32px" }}>
            "Fashion is not about{" "}
            <em style={{ color: "#C9A96E" }}>gender</em>. It is about{" "}
            <em style={{ color: "#C9A96E" }}>power</em>."
          </h2>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>
            — Withney, Founder
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ width: "100%", padding: "96px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ border: "1px solid rgba(201,169,110,0.3)", padding: "80px 32px", textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "64px", height: "64px", borderTop: "1px solid #C9A96E", borderLeft: "1px solid #C9A96E" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: "64px", height: "64px", borderTop: "1px solid #C9A96E", borderRight: "1px solid #C9A96E" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "64px", height: "64px", borderBottom: "1px solid #C9A96E", borderLeft: "1px solid #C9A96E" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: "64px", height: "64px", borderBottom: "1px solid #C9A96E", borderRight: "1px solid #C9A96E" }} />
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "24px" }}>Limited Edition</p>
            <h2 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "24px" }}>
              The Void Collection
            </h2>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.5)", maxWidth: "320px", margin: "0 auto 40px" }}>
              12 pieces. No restock. No compromise.
            </p>
            <Link href="/collections" className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "16px 48px", display: "inline-block", textDecoration: "none" }}>
              Shop The Drop
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
