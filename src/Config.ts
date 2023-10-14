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
    offices: "/offices",
  },
  pages: {
    index: {
      path: "/",
      name: "Index",
    },
    login: {
      path: "/login",
      name: "Login",
    },
    services: {
      path: "/services",
      name: "Услуги",
    },
    servicetypes: {
      path: "/servicetypes",
      name: "Тип филиалов",
    },
    map: {
      path: "/map",
      name: "Google Map",
    },
    office: {
      path: "/offices",
      name: "Офисы",
    },
  },
};

export default Config;
