import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import GlobalThemeProvider from "@/Components/Theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { YMaps } from "@pbe/react-yandex-maps";
import Config from "@/Config";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <YMaps
            query={{
              apikey: Config.ymapsApiKey,
              ns: "use-load-option",
              load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon,route",
            }}
          >
            <Component {...pageProps} />
          </YMaps>
        </LocalizationProvider>
      </QueryClientProvider>
    </GlobalThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
