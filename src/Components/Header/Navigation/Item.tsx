import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface INavigationItem {
  path: string;
  name: string;
}

export default function NavigationItem({ path, name }: INavigationItem) {
  const router = useRouter();
  const active = router.asPath == path;

  return (
    <li style={{ listStyle: "none" }}>
      <Link href={path} style={{ textDecoration: "none" }}>
        <Typography color={active ? "white" : "gray"}>{name}</Typography>
      </Link>
    </li>
  );
}
