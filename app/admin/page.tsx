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
  const [form, setForm] = useState({
    name: "",
    price: "",
    tag: "New",
    category: "Outerwear",
    description: "",
    sizes: [] as string[],
    shoeSizes: [] as string[],
    image: "",
  });
  const [success, setSuccess] = useState("");

  // Guard
  if (!user || !isAdmin) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F0E8] mb-6">Access Denied</h1>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/40 mb-8">You must be an admin to view this page.</p>
          <button onClick={() => router.push("/login")}
            className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-8 py-4 hover:bg-[#F5F0E8] transition-all duration-300">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const allShoeSizes = ["36","37","38","39","40","41","42","43","44","45"];
  const categories = ["Outerwear", "Tops", "Bottoms", "Dresses", "Shoes"];
  const tags = ["New", "Bestseller", "Limited", "Hot"];

  function toggleSize(size: string) {
    setForm((f) => ({
      ...f,
      sizes: f.sizes.includes(size) ? f.sizes.filter((s) => s !== size) : [...f.sizes, size],
    }));
  }

  function toggleShoeSize(size: string) {
    setForm((f) => ({
      ...f,
      shoeSizes: f.shoeSizes.includes(size) ? f.shoeSizes.filter((s) => s !== size) : [...f.shoeSizes, size],
    }));
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

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] text-[#C9A96E] uppercase mb-3">Admin Dashboard</p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl text-[#F5F0E8] font-light">Welcome, {user.name}</h1>
          </div>
          <div className="text-right">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30">{products.length} products</p>
          </div>
        </div>

        {/* Success */}
        {success && (
          <div className="border border-[#C9A96E]/40 bg-[#C9A96E]/10 px-6 py-4 mb-8">
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A96E]">✓ {success}</p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-8 border-b border-[#C9A96E]/20 mb-12">
          {[{ key: "products", label: "All Products" }, { key: "add", label: "Add New Product" }].map((tab) => (
            <button key={tab.key}
              onClick={() => setActiveTab(tab.key as "products" | "add")}
              className={`font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase pb-4 border-b-2 transition-all duration-300 ${
                activeTab === tab.key ? "border-[#C9A96E] text-[#C9A96E]" : "border-transparent text-[#F5F0E8]/40 hover:text-[#F5F0E8]"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-4">
            {products.map((p) => (
              <div key={p.id} className="border border-[#C9A96E]/10 p-6 flex items-center justify-between gap-6 hover:border-[#C9A96E]/30 transition-colors duration-300">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#111] border border-[#C9A96E]/10 flex items-center justify-center shrink-0">
                    {p.image ? (
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[#C9A96E]/20">W</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#F5F0E8] mb-1">{p.name}</h3>
                    <div className="flex items-center gap-4">
                      <span className="font-[family-name:var(--font-inter)] text-xs text-[#C9A96E]">₦{p.price.toLocaleString()}</span>
                      <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[#F5F0E8]/30">{p.category}</span>
                      <span className="font-[family-name:var(--font-inter)] text-[10px] bg-[#C9A96E]/20 text-[#C9A96E] px-2 py-0.5">{p.tag}</span>
                    </div>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/30 mt-1">
                      {p.sizes.length > 0 && `Sizes: ${p.sizes.join(", ")}`}
                      {p.shoeSizes && p.shoeSizes.length > 0 && `Shoe sizes: ${p.shoeSizes.join(", ")}`}
                    </p>
                  </div>
                </div>
                <button onClick={() => handleDelete(p.id)}
                  className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase border border-red-500/30 text-red-400 px-4 py-2 hover:bg-red-500/10 transition-all duration-300 shrink-0">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add Product Tab */}
        {activeTab === "add" && (
          <form onSubmit={handleAdd} className="space-y-10 max-w-2xl">

            {/* Name */}
            <div>
              <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Product Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. The Noir Overcoat"
                className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300" />
            </div>

            {/* Price */}
            <div>
              <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Price (₦)</label>
              <input required type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="e.g. 185000"
                className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300" />
            </div>

            {/* Category + Tag */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-[#111] border border-[#F5F0E8]/10 py-3 px-4 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] focus:outline-none focus:border-[#C9A96E] transition-colors duration-300">
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Tag</label>
                <select value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}
                  className="w-full bg-[#111] border border-[#F5F0E8]/10 py-3 px-4 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] focus:outline-none focus:border-[#C9A96E] transition-colors duration-300">
                  {tags.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Description</label>
              <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Describe the piece..."
                className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300 resize-none" />
            </div>

            {/* Image URL */}
            <div>
              <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-3">Image URL</label>
              <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="https://... (paste image link)"
                className="w-full bg-transparent border-b border-[#F5F0E8]/20 py-3 font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/20 focus:outline-none focus:border-[#C9A96E] transition-colors duration-300" />
            </div>

            {/* Clothing Sizes */}
            <div>
              <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-4">Clothing Sizes</label>
              <div className="flex gap-3 flex-wrap">
                {allSizes.map((s) => (
                  <button type="button" key={s} onClick={() => toggleSize(s)}
                    className={`font-[family-name:var(--font-inter)] text-xs px-4 py-2 border transition-all duration-300 ${
                      form.sizes.includes(s) ? "bg-[#C9A96E] text-[#0A0A0A] border-[#C9A96E]" : "border-[#F5F0E8]/20 text-[#F5F0E8]/50 hover:border-[#C9A96E]"
                    }`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Shoe Sizes */}
            <div>
              <label className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] block mb-4">Shoe Sizes (EU)</label>
              <div className="flex gap-3 flex-wrap">
                {allShoeSizes.map((s) => (
                  <button type="button" key={s} onClick={() => toggleShoeSize(s)}
                    className={`font-[family-name:var(--font-inter)] text-xs px-4 py-2 border transition-all duration-300 ${
                      form.shoeSizes.includes(s) ? "bg-[#C9A96E] text-[#0A0A0A] border-[#C9A96E]" : "border-[#F5F0E8]/20 text-[#F5F0E8]/50 hover:border-[#C9A96E]"
                    }`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit"
              className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] px-12 py-5 hover:bg-[#F5F0E8] transition-all duration-300">
              Add Product
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
