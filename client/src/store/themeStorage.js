import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'Light',
  buttonTheme: 'blue',
  changeTheme: (theme) =>
    set({
      theme: theme,
    }),
  changeButtonTheme: (buttonTheme) =>
    set({
      buttonTheme: buttonTheme,
    }),
}));
