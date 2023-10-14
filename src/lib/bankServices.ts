import Config from "@/Config";
import reqService from "./services/reqService";

async function getServiceTypes() {
  try {
    const res = await reqService.get(Config.endpoints.serviceTypes);
    return res.data as BankServiceType[];
  } catch (error) {
    console.log("no servie types: ", error);
    return null;
  }
}

async function getBankServices() {
  try {
    const res = await reqService.get(Config.endpoints.services);
    return res.data as BankService[];
  } catch (error) {
    console.log("no bank service: ", error);
    return null;
  }
}

export { getServiceTypes, getBankServices };
