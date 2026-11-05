import Link from "next/link";

export default function About() {
  return (
    <div style={{ backgroundColor: "#0A0A0A", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Hero */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "128px 32px 64px" }}>
        <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "24px" }}>Our Story</p>
        <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 0.95, marginBottom: "48px" }}>
          Born Fearless.<br />
          <em style={{ color: "#C9A96E" }}>Dressed Bold.</em>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "64px", alignItems: "center" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.6)", lineHeight: 1.9 }}>
            Withney Fashion was born in 2021 from a single belief — that luxury should have no gender.
            Founded in Lagos, Nigeria, we create pieces that command attention without asking for permission.
            Every stitch is intentional. Every silhouette, a statement.
          </p>
          <div style={{ aspectRatio: "1/1", backgroundColor: "#111", border: "1px solid rgba(201,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "10rem", color: "rgba(201,169,110,0.08)", fontWeight: 300 }}>W</span>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.2)", borderBottom: "1px solid rgba(201,169,110,0.2)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
          <h2 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "64px" }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px" }}>
            {[
              { title: "No Gender. No Rules.", body: "We design for the human body, not for boxes. Every piece in our collection is made to be worn by anyone who dares." },
              { title: "Luxury With Nerve.", body: "We refuse to make fashion that plays it safe. Withney pieces are luxurious, provocative, and unapologetically bold." },
              { title: "Made to Last.", body: "Fast fashion is not in our vocabulary. We source premium fabrics and work with skilled artisans to create pieces you keep forever." },
            ].map((val, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(201,169,110,0.2)", paddingTop: "32px" }}>
                <h3 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "22px", color: "#C9A96E", marginBottom: "16px", fontWeight: 300 }}>{val.title}</h3>
                <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}>{val.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "64px", alignItems: "center" }}>
          <div style={{ aspectRatio: "3/4", backgroundColor: "#111", border: "1px solid rgba(201,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "10rem", color: "rgba(201,169,110,0.08)", fontWeight: 300 }}>W</span>
          </div>
          <div>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "24px" }}>The Founder</p>
            <h2 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "32px" }}>Withney</h2>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.6)", lineHeight: 1.9, marginBottom: "24px" }}>
              "I grew up watching fashion be used as a tool for exclusion — too feminine, too masculine, too much.
              I built Withney to be the brand I never had. One that says: you are enough, exactly as you are. Now dress like it."
            </p>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.6)", lineHeight: 1.9 }}>
              Based in Lagos. Thinking globally. Dressing everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ borderTop: "1px solid rgba(201,169,110,0.2)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", textAlign: "center" }}>
          {[{ number: "2021", label: "Founded" },{ number: "500+", label: "Pieces Sold" },{ number: "12+", label: "Collections" },{ number: "1", label: "Vision" }].map((stat, i) => (
            <div key={i}>
              <p className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#C9A96E", fontWeight: 300, marginBottom: "8px" }}>{stat.number}</p>
              <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.4)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px 96px", textAlign: "center" }}>
        <h2 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "32px" }}>Ready to wear your nerve?</h2>
        <Link href="/collections" className="font-[family-name:var(--font-inter)]"
          style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "16px 48px", display: "inline-block", textDecoration: "none" }}>
          Shop Collections
        </Link>
      </div>

    </div>
  );
}
