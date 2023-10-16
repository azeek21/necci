type BankServiceType = {
  id: number;
  name: "БАНКОМАТ" | "ОФИС";
};

type BankClientType = {
  id: number;
  name: "ЮЛ" | "ФЛ";
};

type BankService = {
  name: string;
  clientTypes: BankClientType[];
  serviveTypes: ServiceTypem[];
};

type WeekDayName =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

type WeekDay = {
  from: string;
  to: string;
  day: WeekDayName;
  fullDay?: boolean;
  name?: string;
  isDayOff?: boolean;
};

type Office = {
  id?: number;
  address: string;
  longitude: number;
  latitude: number;
  metroStation?: string;
  workingHours: WeekDay[];
};
