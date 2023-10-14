import useGlobalStore from "@/store/globalStore";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Navigation,
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

export default function Header() {
  const switchTeme = useGlobalStore((s) => s.switchTheme);
  const themeMode = useGlobalStore((s) => s.themeMode);

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography sx={{ mr: "auto" }} variant="h4">
            Admin Page
          </Typography>

          <nav>
            <Stack
              component={"ul"}
              spacing={2}
              direction="row"
              sx={{ listStyle: "none" }}
            >
              <li>
                <Link href={"/services"}>
                  <Button variant="outlined">
                    <Typography color={"white"}>Услуги</Typography>
                  </Button>
                </Link>
              </li>
              <li>
                <Link href={"/servicetypes"}>
                  <Button variant="outlined">
                    <Typography color={"white"}>Филиали</Typography>
                  </Button>
                </Link>
              </li>
            </Stack>
          </nav>

          <Switch
            size="medium"
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
