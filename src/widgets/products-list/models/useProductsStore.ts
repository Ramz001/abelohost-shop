import { create } from "zustand";
import type { Product } from "@entities/product";
import { fetchProducts } from "../api/productsApi";

interface ProductsState {
  data: Product[];
  loading: boolean;
  error?: string;
  fetchProducts: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
  data: [],
  loading: false,
  error: undefined,
  fetchProducts: async () => {
    set({ loading: true, error: undefined });
    try {
      const data = await fetchProducts({ limit: 12, skip: 0 });
      set({ data, loading: false });
    } catch (err: unknown) {
      set({
        error: err instanceof Error ? err.message : "Failed to fetch products",
        loading: false,
      });
    }
  },
}));
