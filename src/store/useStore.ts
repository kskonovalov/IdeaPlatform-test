import { create } from "zustand";

// Define the type for the store's state
interface AppStore {
  currency: string;
  transfers: number[];
  loading: boolean;
  currencyRates: Record<string, number>;
  setCurrency: (currency: string) => void;
  setTransfers: (transfers: number[]) => void;
  setLoading: (loading: boolean) => void;
  setCurrencyRates: (currencyRates: Record<string, number>) => void;
}

// Create the Zustand store
export const useStore = create<AppStore>((set) => ({
  currency: "RUB",
  transfers: [],
  loading: false,
  currencyRates: {},
  setCurrency: (currency) => set(() => ({ currency })),
  setTransfers: (transfers) => set(() => ({ transfers })),
  setLoading: (loading) => set(() => ({ loading })),
  setCurrencyRates: (currencyRates) => set(() => ({ currencyRates })),
}));
