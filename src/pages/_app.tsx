import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import GlobalThemeProvider from "@/Components/theme/ThemeProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GlobalThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
