import { create } from "zustand";

interface User {
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  isAdmin: boolean;
  login: (user: User) => void;
  logout: () => void;
  setAdmin: (val: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAdmin: false,
  login: (user) => set({ user }),
  logout: () => set({ user: null, isAdmin: false }),
  setAdmin: (val) => set({ isAdmin: val }),
}));
