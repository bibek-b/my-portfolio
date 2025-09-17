import { create } from "zustand";

type Store = {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export const useActiveSectionStore = create<Store>((set) => ({
    activeSection: 'home',
    setActiveSection: (section) => set({activeSection: section})
}))