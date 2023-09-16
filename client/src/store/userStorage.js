import { create } from 'zustand';

export const useUserIdStore = create((set) => ({
  userProfile: {},
  setUser: (userProfile) =>
    set({
      userProfile: userProfile,
    }),
}));
