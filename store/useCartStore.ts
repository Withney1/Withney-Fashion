import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string) => void;
  clearCart: () => void;
  toggleCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item) => {
    const existing = get().items.find(
      (i) => i.id === item.id && i.size === item.size
    );
    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      });
    } else {
      set({ items: [...get().items, item] });
    }
  },
  removeItem: (id, size) =>
    set({ items: get().items.filter((i) => !(i.id === id && i.size === size)) }),
  clearCart: () => set({ items: [] }),
  toggleCart: () => set({ isOpen: !get().isOpen }),
  total: () =>
    get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),
}));
