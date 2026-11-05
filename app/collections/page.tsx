"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

const filters = ["All", "Outerwear", "Tops", "Bottoms", "Dresses", "Shoes"];

export default function Collections() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [added, setAdded] = useState<Record<string, boolean>>({});
  const { addItem, toggleCart } = useCartStore();
  const { user } = useAuthStore();
  const router = useRouter();

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  function handleAddToCart(productId: string) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const allSizes = [...product.sizes, ...(product.shoeSizes ?? [])];
    const size = selectedSizes[productId];
    if (allSizes.length > 0 && !size) {
      alert("Please select a size first.");
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: size || "One Size",
      quantity: 1,
      image: product.image,
    });
    setAdded((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [productId]: false })), 2000);
    toggleCart();
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-24">

        {/* Header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] text-[#C9A96E] uppercase mb-4">
            2026 Season
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-[#F5F0E8] leading-none">
            Collections
          </h1>
        </div>

        {/* Auth notice */}
        {!user && (
          <div className="border border-[#C9A96E]/20 bg-[#C9A96E]/5 px-6 py-4 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/50">
              Sign in to add items to your cart and checkout.
            </p>
            <button onClick={() => router.push("/login")}
              className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#C9A96E] hover:text-[#F5F0E8] transition-colors duration-300 shrink-0">
              Sign In →
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-6 mb-16 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase whitespace-nowrap pb-2 border-b-2 transition-all duration-300 ${
                activeFilter === f
                  ? "border-[#C9A96E] text-[#C9A96E]"
                  : "border-transparent text-[#F5F0E8]/40 hover:text-[#F5F0E8]"
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((item) => {
            const allSizes = [...item.sizes, ...(item.shoeSizes ?? [])];
            return (
              <div key={item.id} className="group">
                <div className="relative aspect-[3/4] bg-[#111] overflow-hidden mb-4 border border-[#C9A96E]/10">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-cormorant)] text-9xl text-[#C9A96E]/8 font-light select-none">W</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-3 py-1">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/30">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 mr-4">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F5F0E8] mb-1 group-hover:text-[#C9A96E] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30 tracking-widest uppercase mb-2">
                      {item.category}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A96E] shrink-0">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>

                {/* Size selector */}
                {allSizes.length > 0 && (
                  <div className="mb-4">
                    <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-2">
                      {item.shoeSizes && item.shoeSizes.length > 0 ? "Shoe Size (EU)" : "Size"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {allSizes.map((s) => (
                        <button key={s}
                          onClick={() => setSelectedSizes((prev) => ({ ...prev, [item.id]: s }))}
                          className={`font-[family-name:var(--font-inter)] text-xs px-3 py-1.5 border transition-all duration-200 ${
                            selectedSizes[item.id] === s
                              ? "bg-[#C9A96E] text-[#0A0A0A] border-[#C9A96E]"
                              : "border-[#F5F0E8]/20 text-[#F5F0E8]/50 hover:border-[#C9A96E] hover:text-[#C9A96E]"
                          }`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <button onClick={() => handleAddToCart(item.id)}
                  className={`w-full font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase py-3 transition-all duration-300 ${
                    added[item.id]
                      ? "bg-[#F5F0E8] text-[#0A0A0A]"
                      : "border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0A0A0A]"
                  }`}>
                  {added[item.id] ? "✓ Added to Cart" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
