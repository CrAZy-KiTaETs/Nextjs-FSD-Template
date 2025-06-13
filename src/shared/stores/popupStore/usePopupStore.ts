import { create } from 'zustand';

import { PopupState } from './types';

export const usePopupStore = create<PopupState>((set, get) => ({
  name: '',
  open: (name) => set({ name }),
  close: () => set({ name: '' }),
  toggle: (name) => {
    const current = get().name;
    set({ name: current === name ? '' : name });
  },
}));
