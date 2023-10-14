import Config from "@/Config";
import { getBankClietTypes } from "@/lib/bankClients";
import { getServiceTypes } from "@/lib/bankServices";
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
  onSubmit: (ser: BankService) => void;
}

export default function ServiceEditor({
  submit,
  onSubmit,
  isOpen,
}: IServiceEditor) {
  const [service, setService] = useState<BankService>({
    clientTypes: [],
    serviveTypes: [],
    name: "",
  });
  const {
    data: services,
    isLoading: isServicesLoading,
    isError: isServicesError,
  } = useQuery({
    queryKey: [Config.endpoints.serviceTypes],
    queryFn: getServiceTypes,
  });

  const {
    data: clients,
    isLoading: isClientsLoading,
    isError: isClientsError,
  } = useQuery({
    queryKey: [Config.endpoints.clientTypes],
    queryFn: getBankClietTypes,
  });

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;
    if (!name) return;
    setService((old) => ({ ...old, [name]: value }));
  }

  function handleToggleClient(client: BankClientType) {
    let clients = service.clientTypes;
    if (clients.findIndex((c) => c.id == client.id) >= 0) {
      setService((old) => ({
        ...old,
        clientTypes: clients.filter((c) => c.id != client.id),
      }));
    } else {
      setService((old) => ({
        ...old,
        clientTypes: [...old.clientTypes, client],
      }));
    }
  }

  function handleToggleService(client: BankServiceType) {
    let services = service.serviveTypes;
    if (services.findIndex((c) => c.id == client.id) >= 0) {
      setService((old) => ({
        ...old,
        serviveTypes: services.filter((c) => c.id != client.id),
      }));
    } else {
      setService((old) => ({
        ...old,
        serviveTypes: [...old.serviveTypes, client],
      }));
    }
  }

  const isLoading = isClientsLoading || isServicesLoading;
  return (
    <Portal>
      <Modal
        open={isOpen}
        sx={{
          border: "1px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper sx={{ p: 8 }} elevation={3}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                onSubmit(service);
              }}
            >
              <FormControl>
                <Stack spacing={4}>
                  <TextField
                    label="Имя Филиала"
                    name="name"
                    value={service.name}
                    onChange={handleChange}
                  />

                  <div>
                    <Typography> Услуги для: </Typography>
                    <Stack direction="row" spacing={4}>
                      {clients &&
                        clients.length > 0 &&
                        clients.map((c) => (
                          <FormControlLabel
                            key={c.id}
                            label={c.name}
                            name={c.name}
                            control={
                              <Checkbox
                                onChange={() => {
                                  handleToggleClient(c);
                                }}
                                checked={Boolean(
                                  service.clientTypes.find(
                                    (ct) => ct.id == c.id
                                  )
                                )}
                              />
                            }
                          />
                        ))}
                    </Stack>
                  </div>

                  <div>
                    <Typography>Тип филиала:</Typography>
                    <Stack direction="row" spacing={4}>
                      {services &&
                        services.length > 0 &&
                        services.map((c) => (
                          <FormControlLabel
                            key={c.id}
                            label={c.name}
                            name={c.name}
                            control={
                              <Checkbox
                                onChange={() => {
                                  handleToggleService(c);
                                }}
                                checked={Boolean(
                                  service.serviveTypes.find(
                                    (ct) => ct.id == c.id
                                  )
                                )}
                              />
                            }
                          />
                        ))}
                    </Stack>
                  </div>
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
