const baseUrl = "https://baseline.us.to/moretech/api/v1";
const Config = {
  AuthTokenName: "Atoken",
  endpoints: {
    base: baseUrl,
    login: "/auth",
    logout: "/auth/logout",
    serviceTypes: "/serviceTypes",
    clientTypes: "/clientTypes",
    services: "/services",
  },
  pages: {
    index: "/",
    login: "/login",
  },
};

export default Config;
