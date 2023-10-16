import Config from "@/Config";
import { getBankClietTypes } from "@/lib/bankClients";
import { getServiceTypes } from "@/lib/bankServices";
import { createEmptyOffice } from "@/lib/offices";
import {
  CircularProgress,
  FormControl,
  Checkbox,
  FormControlLabel,
  Input,
  InputLabel,
  Modal,
  Paper,
  Portal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import DayTimePicker from "./DayTimePicker";
import GetLocation from "../Location/Get";

interface IServiceEditor {
  isOpen: boolean;
  submit: JSX.Element;
  onSubmit: (ser: Office) => void;
}

export default function OfficeEditor({
  submit,
  onSubmit,
  isOpen,
}: IServiceEditor) {
  const [office, setOffice] = useState(createEmptyOffice);
  console.log("created office:", office);

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;
    if (!name) return;
    setOffice((old) => ({ ...old, [name]: value }));
  }

  function handleWorkDayChange(day: WeekDay) {
    setOffice((old) => ({
      ...old,
      workingHours: old.workingHours.map((d) => {
        if (d.day == day.day) {
          d.from = day.from;
          d.to = day.to;
          d.fullDay = day.fullDay;
          d.isDayOff = day.isDayOff;
        }
        return d;
      }),
    }));
  }

  return (
    <Modal
      open={isOpen}
      sx={{
        position: "absolute",
        top: 10,
        width: "90%",
        margin: "auto",
        height: "90%",
        overflow: "auto",
      }}
    >
      <Paper sx={{ p: 8 }} elevation={3}>
        {false ? (
          <CircularProgress />
        ) : (
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              onSubmit(office);
            }}
          >
            <FormControl fullWidth>
              <Stack spacing={4}>
                <TextField
                  label="Адрес Филиала"
                  name="address"
                  value={office.address}
                  onChange={handleChange}
                />
                <TextField
                  label="Ближайшее метро"
                  name="metroStation"
                  value={office.metroStation}
                  onChange={handleChange}
                />
                <div>
                  <Typography> Рабочие дни: </Typography>
                  <Stack direction="column" spacing={2}>
                    {office.workingHours.map((d) => (
                      <DayTimePicker
                        key={d.day}
                        day={d}
                        name={d.name || ""}
                        onChange={(d) => {
                          console.log("change: ", d);
                          handleWorkDayChange(d);
                        }}
                      />
                    ))}
                  </Stack>
                </div>

                <Paper sx={{ minHeight: 500, width: "100%" }}>
                  <GetLocation
                    onGet={(ps) => {
                      setOffice((old) => ({
                        ...old,
                        longitude: ps[0],
                        latitude: ps[1],
                      }));
                    }}
                  />
                </Paper>
                {submit}
              </Stack>
            </FormControl>
          </form>
        )}
      </Paper>
    </Modal>
  );
}
