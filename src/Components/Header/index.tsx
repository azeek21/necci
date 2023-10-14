import useGlobalStore from "@/store/globalStore";

import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Checkbox,
  Container,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import Services from "../Services";
import Link from "next/link";
import HeaderNavigation from "./Navigation";
import { useRouter } from "next/router";
import Config from "@/Config";

export default function Header() {
  const switchTeme = useGlobalStore((s) => s.switchTheme);
  const themeMode = useGlobalStore((s) => s.themeMode);
  const router = useRouter();
  const pageObj = Object.entries(Config.pages).find(
    ([_, page]) => page.path == router.asPath
  );
  const title = pageObj && pageObj[1] ? pageObj[1].name : "Admin";

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography sx={{ mr: "auto" }} variant="h4">
            {title}
          </Typography>

          <HeaderNavigation />

          <Switch
            size="medium"
            name="theme-switch"
            inputProps={{ "aria-label": "xxx" }}
            icon={<DarkModeIcon fontSize="small" />}
            checkedIcon={<LightModeIcon fontSize="small" />}
            checked={themeMode == "dark"}
            onChange={switchTeme}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
}
