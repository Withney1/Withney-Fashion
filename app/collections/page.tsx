import Link from "next/link";

const items = [
  { name: "The Noir Overcoat", price: "₦185,000", tag: "Bestseller", category: "Outerwear" },
  { name: "Sculpted Leather Trousers", price: "₦92,000", tag: "New", category: "Bottoms" },
  { name: "The Void Shirt", price: "₦48,000", tag: "Limited", category: "Tops" },
  { name: "Shadow Wrap Dress", price: "₦76,000", tag: "New", category: "Dresses" },
  { name: "Unisex Utility Vest", price: "₦55,000", tag: "Hot", category: "Outerwear" },
  { name: "Wide Leg Silk Trousers", price: "₦68,000", tag: "Limited", category: "Bottoms" },
  { name: "The Bone Blazer", price: "₦120,000", tag: "Bestseller", category: "Outerwear" },
  { name: "Cut-Out Bodysuit", price: "₦39,000", tag: "New", category: "Tops" },
  { name: "Draped Midi Skirt", price: "₦52,000", tag: "Hot", category: "Bottoms" },
];

const filters = ["All", "Outerwear", "Tops", "Bottoms", "Dresses"];

export default function Collections() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] text-[#C9A96E] uppercase mb-4">
            2026 Season
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-[#F5F0E8] leading-none">
            Collections
          </h1>
        </div>

        {/* Filters */}
        <div className="flex gap-6 mb-16 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase whitespace-nowrap text-[#F5F0E8]/50 hover:text-[#C9A96E] transition-colors duration-300 first:text-[#C9A96E] border-b border-transparent first:border-[#C9A96E] pb-1"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image placeholder */}
              <div className="relative aspect-[3/4] bg-[#111] overflow-hidden mb-4 border border-[#C9A96E]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-9xl text-[#C9A96E]/8 font-light select-none">
                    W
                  </span>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-3 py-1">
                    {item.tag}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 right-4">
                  <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/30">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#C9A96E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quick view */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A]/90 py-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A96E]">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F5F0E8] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40 tracking-widest uppercase">
                    {item.category}
                  </p>
                </div>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A96E] shrink-0 ml-4">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-20">
          <button className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-[#C9A96E]/40 text-[#F5F0E8]/60 px-12 py-4 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300">
            Load More
          </button>
        </div>

      </div>
    </div>
  );
}
