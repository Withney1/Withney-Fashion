"use client";

import { useCartStore } from "@/store/useCartStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { items, isOpen, toggleCart, removeItem, clearCart, total } = useCartStore();
  const { user } = useAuthStore();
  const router = useRouter();

  if (!isOpen) return null;

  function handleCheckout() {
    if (!user) {
      toggleCart();
      router.push("/login");
      return;
    }
    alert("Checkout coming soon!");
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" onClick={toggleCart} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-[#C9A96E]/20 z-50 flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#C9A96E]/20">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#F5F0E8] font-light">
            Your Cart <span className="text-[#C9A96E]">({items.length})</span>
          </h2>
          <button onClick={toggleCart} className="text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors duration-300 text-2xl">
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <span className="font-[family-name:var(--font-cormorant)] text-6xl text-[#C9A96E]/10">W</span>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8]/30 mt-4">Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-[#C9A96E]/10 pb-6">
                <div className="w-20 h-24 bg-[#111] border border-[#C9A96E]/10 flex items-center justify-center shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[#C9A96E]/20">W</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[#F5F0E8] mb-1">{item.name}</h3>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#F5F0E8]/40 mb-2">
                    Size: {item.size} · Qty: {item.quantity}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#C9A96E]">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-[#F5F0E8]/20 hover:text-red-400 transition-colors duration-300 text-sm self-start mt-1">
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t border-[#C9A96E]/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#F5F0E8]/50">Total</span>
              <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[#F5F0E8]">₦{total().toLocaleString()}</span>
            </div>

            {!user && (
              <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A96E]/70 text-center">
                You need to sign in to checkout
              </p>
            )}

            <button onClick={handleCheckout}
              className="w-full font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase bg-[#C9A96E] text-[#0A0A0A] py-4 hover:bg-[#F5F0E8] transition-all duration-300">
              {user ? "Proceed to Checkout" : "Sign In to Checkout"}
            </button>

            <button onClick={clearCart}
              className="w-full font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase border border-[#F5F0E8]/10 text-[#F5F0E8]/30 py-3 hover:border-red-500/30 hover:text-red-400 transition-all duration-300">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
