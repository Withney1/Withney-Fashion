import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #C9A96E 0px, #C9A96E 1px, transparent 1px, transparent 80px)" }}
        />
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] text-[#C9A96E] mb-8 uppercase">New Collection — 2026</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(4rem,12vw,10rem)] leading-[0.9] font-light text-[#F5F0E8] mb-8">
            Wear Your<br /><em className="text-[#C9A96E] not-italic">Nerve</em>
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/50 max-w-md mx-auto leading-relaxed mb-12">
            Luxury unisex fashion that challenges every convention. Designed for those who dress with intention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections" className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-10 py-4 hover:bg-[#F5F0E8] transition-all duration-300">Explore Collections</Link>
            <Link href="/about" className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-[#F5F0E8]/30 text-[#F5F0E8] px-10 py-4 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300">Our Story</Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] text-[#F5F0E8]/30 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A96E]/60 to-transparent" />
        </div>
      </section>

      <section className="border-y border-[#C9A96E]/20 py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array(6).fill(["LUXURY", "UNISEX", "BOLD", "CHEEKY", "WITHNEY", "2026"]).flat().map((word, i) => (
            <span key={i} className="font-[family-name:var(--font-cormorant)] text-2xl text-[#C9A96E]/40 italic shrink-0">{word} &nbsp;—&nbsp;</span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-32">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#F5F0E8]">Featured<br /><em className="text-[#C9A96E]">Drops</em></h2>
          <Link href="/collections" className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/50 hover:text-[#C9A96E] transition-colors duration-300 hidden md:block">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "The Noir Overcoat", price: "₦185,000", tag: "Bestseller" },
            { name: "Sculpted Leather Trousers", price: "₦92,000", tag: "New" },
            { name: "The Void Shirt", price: "₦48,000", tag: "Limited" },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-[#111] overflow-hidden mb-4 border border-[#C9A96E]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-8xl text-[#C9A96E]/10 font-light">W</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-3 py-1">{item.tag}</span>
                </div>
                <div className="absolute inset-0 bg-[#C9A96E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A]/90 py-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A96E]">Quick View</span>
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F5F0E8] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">{item.name}</h3>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A96E]">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#C9A96E]/20 py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[#F5F0E8] leading-tight mb-8">
            "Fashion is not about <em className="text-[#C9A96E]">gender</em>. It is about <em className="text-[#C9A96E]">power</em>."
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#F5F0E8]/30">— Withney, Founder</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-32">
        <div className="border border-[#C9A96E]/30 p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C9A96E]" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#C9A96E]" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#C9A96E]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C9A96E]" />
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-6">Limited Edition</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#F5F0E8] mb-8">The Void Collection</h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/50 max-w-sm mx-auto mb-10">12 pieces. No restock. No compromise.</p>
          <Link href="/collections" className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-12 py-4 hover:bg-[#F5F0E8] transition-all duration-300 inline-block">Shop The Drop</Link>
        </div>
      </section>
    </div>
  );
}
