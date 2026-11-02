import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#C9A96E]/20 bg-[#0A0A0A] px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 border border-[#C9A96E] flex items-center justify-center">
              <span className="font-[family-name:var(--font-cormorant)] text-[#C9A96E] text-xl font-semibold">W</span>
            </div>
            <span className="font-[family-name:var(--font-cormorant)] text-[#F5F0E8] text-lg tracking-[0.3em] font-light">WITHNEY</span>
          </div>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/50 leading-relaxed max-w-xs">
            Luxury unisex fashion for those who refuse to be defined. Bold cuts. Cheeky details. Timeless edge.
          </p>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-6">Navigate</h4>
          <ul className="space-y-4">
            {[{ label: "Collections", href: "/collections" },{ label: "About", href: "/about" },{ label: "Contact", href: "/contact" }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/60 hover:text-[#C9A96E] transition-colors duration-300">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-6">Follow</h4>
          <ul className="space-y-4">
            {["Instagram", "TikTok", "Pinterest", "Twitter"].map((s) => (
              <li key={s}>
                <a href="#" className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/60 hover:text-[#C9A96E] transition-colors duration-300">{s}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#C9A96E]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30 tracking-widest">© 2026 WITHNEY FASHION. ALL RIGHTS RESERVED.</p>
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30 tracking-widest">LUXURY. UNISEX. BOLD.</p>
      </div>
    </footer>
  );
}
