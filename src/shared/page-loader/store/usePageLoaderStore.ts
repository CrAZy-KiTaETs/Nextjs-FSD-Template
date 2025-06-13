import { create } from 'zustand';

import { TUsePageLoaderState } from './types';

export const usePageLoaderStore = create<TUsePageLoaderState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => {
    setTimeout(() => {
      set({ isOpen: false });
    }, 500);
  },
}));
