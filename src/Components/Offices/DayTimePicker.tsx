import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Config from "@/Config";
import { Update as UpdateIcon } from "@mui/icons-material";

interface IDayTimePicker {
  day: WeekDay;
  onChange: (data: WeekDay) => void;
  name: string;
}

export default function DayTimePicker({ day, onChange, name }: IDayTimePicker) {
  const [isDayOff, setIsDayOff] = useState(Boolean(day.isDayOff));
  const [isAllDay, setIsAllDay] = useState(Boolean(day.fullDay));
  const [data, setData] = useState(day);

  function handleFromChange(d: Dayjs | null) {
    if (!d) return;
    const from = d.format("HH:mm");
    onChange({ ...data, from });
    setData((old) => ({ ...old, from }));
  }

  function handleToChange(d: Dayjs | null) {
    if (!d) return;
    const to = d.format("HH:mm");
    onChange({ ...data, to });
    setData((old) => ({ ...old, to }));
  }

  function toggleAllDay() {
    setIsAllDay((x) => !x);
    onChange({ ...data, fullDay: !isAllDay });
  }

  function toggleDayOff() {
    onChange({ ...data, isDayOff: !isDayOff });
    setIsDayOff((x) => !x);
  }

  return (
    <Stack direction="row" spacing={2}>
      <FormControlLabel
        label={name}
        control={
          <Checkbox
            checked={!isDayOff}
            name={"workday-" + data.day}
            onChange={toggleDayOff}
          />
        }
      />
      {!isDayOff && !isAllDay && (
        <Stack direction="row" spacing={2}>
          <TimePicker
            ampm={false}
            label="From"
            // defaultValue={dayjs(isAllDay ? "2002-05-16 00:00" : data.from)}
            value={dayjs(Config.defaultYear + (isAllDay ? "00:00" : data.from))}
            onChange={handleFromChange}
          />
          <TimePicker
            ampm={false}
            label="To"
            // defaultValue={dayjs(isAllDay ? "2002-05-16 24:00" : data.to)}
            value={dayjs(Config.defaultYear + (isAllDay ? "23:59" : data.to))}
            onChange={handleToChange}
          />
        </Stack>
      )}
      {!isDayOff && (
        <FormControlLabel
          label={
            <span style={{ color: isAllDay ? "green" : "inherit" }}>
              Полный день
            </span>
          }
          control={
            <Checkbox
              checked={isAllDay}
              icon={<UpdateIcon color="primary" />}
              checkedIcon={<UpdateIcon color="success" />}
              name={"isFullDay" + data.day}
              onChange={toggleAllDay}
            />
          }
        />
      )}
    </Stack>
  );
}
