import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,169,110,0.2)", backgroundColor: "#0A0A0A", padding: "64px 0", width: "100%" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "64px" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "36px", height: "36px", border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-[family-name:var(--font-cormorant)]" style={{ color: "#C9A96E", fontSize: "20px", fontWeight: 600 }}>W</span>
              </div>
              <span className="font-[family-name:var(--font-cormorant)]" style={{ color: "#F5F0E8", fontSize: "18px", letterSpacing: "0.3em", fontWeight: 300 }}>WITHNEY</span>
            </div>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(245,240,232,0.4)", lineHeight: 1.8, maxWidth: "280px" }}>
              Luxury unisex fashion for those who refuse to be defined. Bold cuts. Cheeky details. Timeless edge.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "24px" }}>Navigate</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Collections", href: "/collections" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Refund Policy", href: "/refund-policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "24px" }}>Follow</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Instagram", "TikTok", "Pinterest", "Twitter"].map((s) => (
                <li key={s}>
                  <a href="#" className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)", textDecoration: "none" }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(201,169,110,0.1)", paddingTop: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", color: "rgba(245,240,232,0.2)", letterSpacing: "0.1em" }}>
            © 2026 WITHNEY FASHION. ALL RIGHTS RESERVED.
          </p>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", color: "rgba(245,240,232,0.2)", letterSpacing: "0.1em" }}>
            LUXURY. UNISEX. BOLD.
          </p>
        </div>
      </div>
    </footer>
  );
}
