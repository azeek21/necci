import Config from "@/Config";
import reqService from "./services/reqService";

const days: Record<WeekDayName, string> = {
  MONDAY: "Понедельник",
  TUESDAY: "Вторник",
  WEDNESDAY: "Среда",
  THURSDAY: "Четверг",
  FRIDAY: "Пятница",
  SATURDAY: "Суббота",
  SUNDAY: "Воскресенье",
} as const;

function _weekDayBase(name: WeekDayName) {
  return {
    day: name,
    from: "09:00",
    to: "18:00",
    fullDay: false,
    name: days[name],
    isDayOff: true,
    latitude: 0,
    longitude: 0,
  };
}

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
    workingHours: Object.entries(days).map(([day, name]) => {
      return _weekDayBase(day as WeekDayName);
    }),
    metroStation: "",
  };
}

export { getOffices, createEmptyOffice };
