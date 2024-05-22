import { create } from 'zustand';

interface PortfolioStore {
  containerRef: React.RefObject<HTMLDivElement> | null;
  setContainerRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  containerRef: null,
  setContainerRef: (ref) => set({ containerRef: ref }),
}));
