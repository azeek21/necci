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

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;
    if (!name) return;
    setOffice((old) => ({ ...old, [name]: value }));
  }

  return (
    <Portal>
      <Modal
        open={isOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              <FormControl>
                <Stack spacing={4}>
                  <TextField
                    label="Имя Филиала"
                    name="name"
                    value={office.address}
                    onChange={handleChange}
                  />
                  {submit}
                </Stack>
              </FormControl>
            </form>
          )}
        </Paper>
      </Modal>
    </Portal>
  );
}
