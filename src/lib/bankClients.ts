import Config from "@/Config";
import reqService from "./services/reqService";

async function getBankClietTypes() {
  try {
    const res = await reqService.get(Config.endpoints.clientTypes);
    return res.data as BankClientType[];
  } catch (error) {
    console.log("bank client err: ", error);
    return null;
  }
}

export { getBankClietTypes };
