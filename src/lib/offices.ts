import Config from "@/Config";
import reqService from "./services/reqService";

async function getOffices() {
  try {
    const res = await reqService.get(Config.endpoints.offices);
    return res.data as Office[];
  } catch (error) {
    return null;
  }
}

function createEmptyOffice(): Omit<Office, "id"> {
  return {
    address: "",
    latitude: 0,
    longitude: 0,
    workingHours: [],
    metroStation: "",
  };
}

export { getOffices, createEmptyOffice };
