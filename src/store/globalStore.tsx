import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IGlobalStore {
  themeMode: "dark" | "light";
  switchTheme: () => void;
  _setTheme: (theme: "dark" | "light") => void;
}

const useGlobalStore = create<IGlobalStore>()(
  persist(
    (set) => ({
      themeMode: "dark",
      switchTheme: () =>
        set((s) => {
          localStorage.setItem("noSystemTheme", "true");
          return { themeMode: s.themeMode === "dark" ? "light" : "dark" };
        }),
      _setTheme: (theme) => set({ themeMode: theme }),
    }),
    {
      name: "zglobalstore",
    }
  )
);

export default useGlobalStore;
