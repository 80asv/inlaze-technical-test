import { create } from 'zustand';

type AuthModalState = {
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
};

export const useAuthModal = create<AuthModalState>((set) => ({
  showAuthModal: false,
  setShowAuthModal: (show) => {
    set({ showAuthModal: show });
  },
}));
