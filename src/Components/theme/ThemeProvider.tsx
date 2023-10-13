import useGlobalStore from "@/store/globalStore";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { PropsWithChildren, useMemo } from "react";

export default function GlobalThemeProvider({ children }: PropsWithChildren) {
  const mode = useGlobalStore((s) => s.themeMode);
  const setTheme = useGlobalStore((s) => s._setTheme);
  const isOptedOutOfSystem = localStorage.getItem("noSystemTheme") || false;
  const userPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  console.log(userPrefersDark, isOptedOutOfSystem);
  const theme = useMemo(() => {
    let realMode: "light" | "dark" = "dark";

    if (isOptedOutOfSystem) {
      realMode = mode;
    } else if (!userPrefersDark) {
      setTheme("light");
      realMode = "light";
    }

    let dark = createTheme({
      palette: {
        mode: "dark",
        primary: {
          main: "#0033FF",
          dark: "rgb(17, 52, 181)",
        },
        background: {
          default: "rgb(11, 12, 15)",
          paper: "rgb(29, 32, 42)",
        },
        text: {
          primary: "rgb(194, 211, 237)",
        },
      },
    });

    let light = createTheme({
      palette: {
        mode: "light",
        background: {
          default: "rgb(243, 247, 250)",
          paper: "white",
        },
        primary: {
          main: "#0033FF",
          dark: "rgb(17, 52, 181)",
        },
        text: {
          primary: "rgb(10, 40, 150)",
        },
      },
    });
    return realMode === "light" ? light : dark;
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
