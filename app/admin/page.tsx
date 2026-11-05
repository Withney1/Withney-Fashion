"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { products as initialProducts, Product } from "@/data/products";

export default function Admin() {
  const { user, isAdmin } = useAuthStore();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeTab, setActiveTab] = useState<"products" | "add">("products");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    name: "", price: "", tag: "New", category: "Outerwear",
    description: "", sizes: [] as string[], shoeSizes: [] as string[], image: "",
  });

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const allShoeSizes = ["36","37","38","39","40","41","42","43","44","45"];
  const categories = ["Outerwear", "Tops", "Bottoms", "Dresses", "Shoes"];
  const tags = ["New", "Bestseller", "Limited", "Hot"];

  function toggleSize(size: string) {
    setForm((f) => ({ ...f, sizes: f.sizes.includes(size) ? f.sizes.filter((s) => s !== size) : [...f.sizes, size] }));
  }

  function toggleShoeSize(size: string) {
    setForm((f) => ({ ...f, shoeSizes: f.shoeSizes.includes(size) ? f.shoeSizes.filter((s) => s !== size) : [...f.shoeSizes, size] }));
  }

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now().toString(),
      name: form.name,
      price: parseInt(form.price),
      tag: form.tag,
      category: form.category,
      description: form.description,
      sizes: form.sizes,
      shoeSizes: form.shoeSizes.length > 0 ? form.shoeSizes : undefined,
      image: form.image || undefined,
    };
    setProducts((p) => [newProduct, ...p]);
    setSuccess(`"${form.name}" added successfully!`);
    setForm({ name: "", price: "", tag: "New", category: "Outerwear", description: "", sizes: [], shoeSizes: [], image: "" });
    setActiveTab("products");
    setTimeout(() => setSuccess(""), 4000);
  }

  function handleDelete(id: string) {
    setProducts((p) => p.filter((item) => item.id !== id));
  }

  if (!user || !isAdmin) {
    return (
      <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F5F0E8", fontWeight: 300, marginBottom: "24px" }}>Access Denied</h1>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "rgba(245,240,232,0.4)", marginBottom: "32px" }}>You must be an admin to view this page.</p>
          <button onClick={() => router.push("/login")} className="font-[family-name:var(--font-inter)]"
            style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "16px 32px", border: "none", cursor: "pointer" }}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0A0A0A", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "128px 32px 96px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
          <div>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.4em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "12px" }}>Admin Dashboard</p>
            <h1 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#F5F0E8" }}>Welcome, {user.name}</h1>
          </div>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "12px", color: "rgba(245,240,232,0.3)" }}>{products.length} products</p>
        </div>

        {/* Success */}
        {success && (
          <div style={{ border: "1px solid rgba(201,169,110,0.4)", backgroundColor: "rgba(201,169,110,0.1)", padding: "16px 24px", marginBottom: "32px" }}>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "14px", color: "#C9A96E" }}>✓ {success}</p>
          </div>
        )}

        {/* Tabs */}
        <div style={{ display: "flex", gap: "32px", borderBottom: "1px solid rgba(201,169,110,0.2)", marginBottom: "48px" }}>
          {[{ key: "products", label: "All Products" }, { key: "add", label: "Add New Product" }].map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key as "products" | "add")}
              className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", paddingBottom: "16px", border: "none", borderBottom: activeTab === tab.key ? "2px solid #C9A96E" : "2px solid transparent", color: activeTab === tab.key ? "#C9A96E" : "rgba(245,240,232,0.4)", backgroundColor: "transparent", cursor: "pointer", transition: "all 0.3s" }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {products.map((p) => (
              <div key={p.id} style={{ border: "1px solid rgba(201,169,110,0.1)", padding: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  <div style={{ width: "64px", height: "64px", backgroundColor: "#111", border: "1px solid rgba(201,169,110,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <span className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "24px", color: "rgba(201,169,110,0.2)" }}>W</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)]" style={{ fontSize: "20px", color: "#F5F0E8", marginBottom: "4px" }}>{p.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "13px", color: "#C9A96E" }}>₦{p.price.toLocaleString()}</span>
                      <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>{p.category}</span>
                      <span className="font-[family-name:var(--font-inter)]" style={{ fontSize: "10px", backgroundColor: "rgba(201,169,110,0.2)", color: "#C9A96E", padding: "2px 8px" }}>{p.tag}</span>
                    </div>
                    <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "11px", color: "rgba(245,240,232,0.3)", marginTop: "4px" }}>
                      {p.sizes.length > 0 && `Sizes: ${p.sizes.join(", ")}`}
                      {p.shoeSizes && p.shoeSizes.length > 0 && `Shoe sizes: ${p.shoeSizes.join(", ")}`}
                    </p>
                  </div>
                </div>
                <button onClick={() => handleDelete(p.id)} className="font-[family-name:var(--font-inter)]"
                  style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid rgba(239,68,68,0.3)", color: "rgba(239,68,68,0.8)", padding: "8px 16px", backgroundColor: "transparent", cursor: "pointer", flexShrink: 0 }}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add Tab */}
        {activeTab === "add" && (
          <form onSubmit={handleAdd} style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "640px" }}>
            {[
              { label: "Product Name", key: "name", type: "text", placeholder: "e.g. The Noir Overcoat" },
              { label: "Price (₦)", key: "price", type: "number", placeholder: "e.g. 185000" },
              { label: "Image URL", key: "image", type: "text", placeholder: "https://... (paste image link)" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>{field.label}</label>
                <input required={field.key !== "image"} type={field.type} placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form] as string}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(245,240,232,0.2)", padding: "12px 0", fontSize: "14px", color: "#F5F0E8", outline: "none", fontFamily: "inherit" }} />
              </div>
            ))}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              <div>
                <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  style={{ width: "100%", backgroundColor: "#111", border: "1px solid rgba(245,240,232,0.1)", padding: "12px 16px", fontSize: "14px", color: "#F5F0E8", outline: "none", fontFamily: "inherit" }}>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>Tag</label>
                <select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}
                  style={{ width: "100%", backgroundColor: "#111", border: "1px solid rgba(245,240,232,0.1)", padding: "12px 16px", fontSize: "14px", color: "#F5F0E8", outline: "none", fontFamily: "inherit" }}>
                  {tags.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>Description</label>
              <textarea rows={3} placeholder="Describe the piece..." value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(245,240,232,0.2)", padding: "12px 0", fontSize: "14px", color: "#F5F0E8", outline: "none", resize: "none", fontFamily: "inherit" }} />
            </div>

            <div>
              <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Clothing Sizes</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {allSizes.map((s) => (
                  <button type="button" key={s} onClick={() => toggleSize(s)} className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "12px", padding: "8px 16px", border: `1px solid ${form.sizes.includes(s) ? "#C9A96E" : "rgba(245,240,232,0.2)"}`, backgroundColor: form.sizes.includes(s) ? "#C9A96E" : "transparent", color: form.sizes.includes(s) ? "#0A0A0A" : "rgba(245,240,232,0.5)", cursor: "pointer", transition: "all 0.2s" }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-[family-name:var(--font-inter)]" style={{ display: "block", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Shoe Sizes (EU)</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {allShoeSizes.map((s) => (
                  <button type="button" key={s} onClick={() => toggleShoeSize(s)} className="font-[family-name:var(--font-inter)]"
                    style={{ fontSize: "12px", padding: "8px 16px", border: `1px solid ${form.shoeSizes.includes(s) ? "#C9A96E" : "rgba(245,240,232,0.2)"}`, backgroundColor: form.shoeSizes.includes(s) ? "#C9A96E" : "transparent", color: form.shoeSizes.includes(s) ? "#0A0A0A" : "rgba(245,240,232,0.5)", cursor: "pointer", transition: "all 0.2s" }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="font-[family-name:var(--font-inter)]"
              style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "#C9A96E", color: "#0A0A0A", padding: "20px 48px", border: "none", cursor: "pointer", width: "fit-content" }}>
              Add Product
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
