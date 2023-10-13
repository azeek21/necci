import Config from "@/Config";
import axios from "axios";

async function login(login: string, password: string) {
  try {
    const res = await axios.post(Config.loginEnd, {
      login,
      password,
    });
    if (res.data) {
      localStorage.setItem("bear", res.data);
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

function logout() {}

function register() {}

export { login, logout, register };
