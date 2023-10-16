import Header from "@/Components/Header";
import Config from "@/Config";
import { login } from "@/lib/auth";
import {
  Visibility as VisibleIcon,
  VisibilityOff as InvisibleIcon,
} from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  Modal,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState({
    login: "",
    password: "",
    passwordVisible: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleDataChange(ev: ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;

    if (typeof name === "string") {
      setData((old) => ({ ...old, [name]: value }));
    }
  }

  async function handleLogin(ev: FormEvent) {
    ev.preventDefault();
    setIsLoading(true);
    let success = await login(data.login, data.password);
    if (success) {
      router.replace(Config.pages.index.path);
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <Header />
      <Paper
        variant="outlined"
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: "2rem",
        }}
      >
        <form onSubmit={handleLogin}>
          <Stack spacing={4} alignItems={"center"}>
            <Typography variant="h5">Авторизоваться</Typography>
            <TextField
              type="text"
              label="Логин"
              name="login"
              value={data.login}
              onChange={handleDataChange}
              fullWidth
            />
            <TextField
              type={data.passwordVisible ? "text" : "password"}
              label="Пароль"
              name="password"
              value={data.password}
              onChange={handleDataChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setData((old) => ({
                          ...old,
                          passwordVisible: !old.passwordVisible,
                        }));
                      }}
                    >
                      {data.passwordVisible ? (
                        <VisibleIcon />
                      ) : (
                        <InvisibleIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" fullWidth type="submit" size="large">
              {isLoading ? <CircularProgress color="info" /> : "Войти"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
