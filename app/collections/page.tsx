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
    if (allSizes.length > 0 && !size) { alert("Please select a size first."); return; }
    addItem({ id: product.id, name: product.name, price: product.price, size: size || "One Size", quantity: 1, image: product.image });
    setAdded((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [productId]: false })), 2000);
    toggleCart();
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "128px 32px 96px" }}>

        {/* Header */}
        <div style={{ marginBottom: "64px" }}>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px" }}>2026 Season</p>
          <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 300, color: "#F5F0E8", lineHeight: 0.95 }}>Collections</h1>
        </div>

        {/* Auth notice */}
        {!user && (
          <div style={{ border: "1px solid rgba(201,169,110,0.2)", backgroundColor: "rgba(201,169,110,0.05)", padding: "16px 24px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(245,240,232,0.5)" }}>Sign in to add items to your cart and checkout.</p>
            <button onClick={() => router.push("/login")} className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", background: "none", border: "none", cursor: "pointer" }}>
              Sign In →
            </button>
          </div>
        )}

        {/* Filters */}
        <div style={{ display: "flex", gap: "32px", borderBottom: "1px solid rgba(201,169,110,0.15)", marginBottom: "64px", overflowX: "auto", paddingBottom: "0" }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap", paddingBottom: "16px", border: "none", borderBottom: activeFilter === f ? "2px solid #C9A96E" : "2px solid transparent", color: activeFilter === f ? "#C9A96E" : "rgba(245,240,232,0.4)", backgroundColor: "transparent", cursor: "pointer", transition: "all 0.3s" }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "48px" }}>
          {filtered.map((item) => {
            const allSizes = [...item.sizes, ...(item.shoeSizes ?? [])];
            return (
              <div key={item.id}>
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "3/4", backgroundColor: "#111", overflow: "hidden", marginBottom: "16px", border: "1px solid rgba(201,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.image ? (
                    <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <span className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "7rem", color: "rgba(201,169,110,0.08)", fontWeight: 300 }}>W</span>
                  )}
                  <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                    <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "4px 12px" }}>{item.tag}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: "16px", right: "16px" }}>
                    <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>{item.category}</span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                  <div style={{ flex: 1, marginRight: "16px" }}>
                    <h3 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "20px", color: "#F5F0E8", marginBottom: "4px" }}>{item.name}</h3>
                    <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)", marginBottom: "8px" }}>{item.category}</p>
                    <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "rgba(245,240,232,0.4)", lineHeight: 1.7 }}>{item.description}</p>
                  </div>
                  <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "#C9A96E", flexShrink: 0 }}>₦{item.price.toLocaleString()}</p>
                </div>

                {/* Sizes */}
                {allSizes.length > 0 && (
                  <div style={{ marginBottom: "16px" }}>
                    <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)", marginBottom: "8px" }}>
                      {item.shoeSizes && item.shoeSizes.length > 0 ? "Shoe Size (EU)" : "Size"}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {allSizes.map((s) => (
                        <button key={s} onClick={() => setSelectedSizes((prev) => ({ ...prev, [item.id]: s }))}
                          className="font-[family-name:var(--font-inter)]"
                          style={{ fontSize: "12px", padding: "6px 12px", border: `1px solid ${selectedSizes[item.id] === s ? "#C9A96E" : "rgba(245,240,232,0.2)"}`, backgroundColor: selectedSizes[item.id] === s ? "#C9A96E" : "transparent", color: selectedSizes[item.id] === s ? "#0A0A0A" : "rgba(245,240,232,0.5)", cursor: "pointer", transition: "all 0.2s" }}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart */}
                <button onClick={() => handleAddToCart(item.id)} className="font-[family-name:var(--font-inter)]"
                  style={{ width: "100%", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "14px", border: `1px solid ${added[item.id] ? "#F5F0E8" : "#C9A96E"}`, backgroundColor: added[item.id] ? "#F5F0E8" : "transparent", color: added[item.id] ? "#0A0A0A" : "#C9A96E", cursor: "pointer", transition: "all 0.3s" }}>
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
