import Config from "@/Config";
import { Container, Stack } from "@mui/material";
import NavigationItem from "./Item";

export default function HeaderNavigation() {
  return (
    <Stack component="ul" direction="row" spacing={4}>
      {Object.entries(Config.pages).map(([_, page]) => (
        <NavigationItem key={page.name} path={page.path} name={page.name} />
      ))}
    </Stack>
  );
}
