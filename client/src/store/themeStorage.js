import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'Light',
  buttonTheme: 'blue',

  getFromLocalStorage: () => {
    const LocalStorageTheme = localStorage.getItem('ThemeData');
    const LocalStorageButtonTheme = localStorage.getItem('ButtonThemeData');
    if (LocalStorageTheme) {
      set({
        theme: LocalStorageTheme,
      });
    }
    if (LocalStorageButtonTheme) {
      set({
        buttonTheme: LocalStorageButtonTheme,
      });
    }
  },

  changeTheme: (theme) =>
    set({
      theme: theme,
    }),
  changeButtonTheme: (buttonTheme) =>
    set({
      buttonTheme: buttonTheme,
    }),
}));
