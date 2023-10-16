// coordinates : [ longitude , latitude ]

const baseUrl = "https://baseline.us.to/moretech/api/v1";
const Config = {
  AuthTokenName: "Atoken",
  defaultYear: "2002-05-16 ",
  ymapsApiKey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API,
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
      name: "Услуги",
    },
    // login: {
    //   path: "/login",
    //   name: "Login",
    // },
    // services: {
    //   path: "/services",
    //   name: "Услуги",
    // },
    // servicetypes: {
    //   path: "/servicetypes",
    //   name: "Тип филиалов",
    // },
    // map: {
    //   path: "/map",
    //   name: "Google Map",
    // },
    office: {
      path: "/offices",
      name: "Офисы",
    },
  },
};

export default Config;
