import Link from "next/link";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24">

      {/* Hero */}
      <section className="px-8 max-w-6xl mx-auto mb-32">
        <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] text-[#C9A96E] uppercase mb-6">
          Our Story
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-[#F5F0E8] leading-none mb-12">
          Born Fearless.<br />
          <em className="text-[#C9A96E]">Dressed Bold.</em>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/60 leading-relaxed">
            Withney Fashion was born in 2021 from a single belief — that luxury should have no gender. 
            Founded in Lagos, Nigeria, we create pieces that command attention without asking for permission. 
            Every stitch is intentional. Every silhouette, a statement.
          </p>
          <div className="aspect-square bg-[#111] border border-[#C9A96E]/10 flex items-center justify-center">
            <span className="font-[family-name:var(--font-cormorant)] text-[10rem] text-[#C9A96E]/10 font-light">W</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-[#C9A96E]/20 py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F0E8] font-light mb-16">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "No Gender. No Rules.",
                body: "We design for the human body, not for boxes. Every piece in our collection is made to be worn by anyone who dares.",
              },
              {
                title: "Luxury With Nerve.",
                body: "We refuse to make fashion that plays it safe. Withney pieces are luxurious, provocative, and unapologetically bold.",
              },
              {
                title: "Made to Last.",
                body: "Fast fashion is not in our vocabulary. We source premium fabrics and work with skilled artisans to create pieces you keep forever.",
              },
            ].map((val, i) => (
              <div key={i} className="border-t border-[#C9A96E]/20 pt-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#C9A96E] mb-4 font-light">
                  {val.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/50 leading-relaxed">
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-8 max-w-6xl mx-auto py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] bg-[#111] border border-[#C9A96E]/10 flex items-center justify-center order-2 md:order-1">
            <span className="font-[family-name:var(--font-cormorant)] text-[10rem] text-[#C9A96E]/10 font-light">W</span>
          </div>
          <div className="order-1 md:order-2">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] text-[#C9A96E] uppercase mb-6">
              The Founder
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl text-[#F5F0E8] font-light mb-8 leading-tight">
              Withney
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/60 leading-relaxed mb-6">
              "I grew up watching fashion be used as a tool for exclusion — too feminine, too masculine, too much. 
              I built Withney to be the brand I never had. One that says: you are enough, exactly as you are. 
              Now dress like it."
            </p>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/60 leading-relaxed">
              Based in Lagos. Thinking globally. Dressing everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-[#C9A96E]/20 py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { number: "2021", label: "Founded" },
            { number: "500+", label: "Pieces Sold" },
            { number: "12+", label: "Collections" },
            { number: "1", label: "Vision" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-[family-name:var(--font-cormorant)] text-5xl text-[#C9A96E] font-light mb-2">
                {stat.number}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 max-w-6xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl text-[#F5F0E8] font-light mb-8">
          Ready to wear your nerve?
        </h2>
        <Link href="/collections"
          className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-12 py-4 hover:bg-[#F5F0E8] transition-all duration-300 inline-block">
          Shop Collections
        </Link>
      </section>

    </div>
  );
}
