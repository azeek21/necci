import useGlobalStore from "@/store/globalStore";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Checkbox,
  Container,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Header() {
  const switchTeme = useGlobalStore((s) => s.switchTheme);
  const themeMode = useGlobalStore((s) => s.themeMode);

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Admin Page</Typography>
          <Switch
            size="medium"
            inputProps={{ "aria-label": "xxx" }}
            icon={<DarkModeIcon fontSize="small" />}
            checkedIcon={<LightModeIcon fontSize="small" />}
            checked={themeMode == "dark"}
            onChange={switchTeme}
            sx={{ ml: "auto" }}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
}
