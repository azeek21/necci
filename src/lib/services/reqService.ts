import Config from "@/Config";
import axios from "axios";

const reqService = axios.create({
  baseURL: Config.endpoints.base,
});

reqService.interceptors.request.use((config) => {
  config.headers.Authorization =
    "Bearer " + localStorage.getItem(Config.AuthTokenName);
  return config;
});

export default reqService;
