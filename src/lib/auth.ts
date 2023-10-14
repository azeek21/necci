import Config from "@/Config";
import axios from "axios";
import reqService from "./services/reqService";

async function _mockLoginSuccess() {
  return new Promise((res) =>
    setTimeout(() => {
      localStorage.setItem(Config.AuthTokenName, "asdfasdfa");
      return res(true);
    }, 2000)
  );
}

async function login(login: string, password: string) {
  return await _mockLoginSuccess();
  try {
    const res = await axios.post(
      Config.endpoints.base + Config.endpoints.login,
      {
        login,
        password,
      }
    );
    if (res.data) {
      localStorage.setItem(Config.AuthTokenName, res.data);
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

function logout() {
  localStorage.removeItem(Config.AuthTokenName);
  return true;
}

// TODO
function register() {}

export { login, logout, register };
