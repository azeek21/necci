import Header from "@/Components/Header";
import Config from "@/Config";
import { getBankServices, getServiceTypes } from "@/lib/bankServices";
import reqService from "@/lib/services/reqService";
import { Button, Chip, Container, Fab, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import ServiceEditor from "./ServiceEditor";
import { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";

export default function Services() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const {
    data: services,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [Config.endpoints.services],
    queryFn: getBankServices,
  });

  const cols: GridColDef[] = [
    {
      field: "id",
      headerName: "№",
      minWidth: 50,
    },
    {
      field: "name",
      headerName: "Услуги",
      minWidth: 150,
    },
    {
      field: "clientTypes",
      headerName: "Услуги для",
      minWidth: 150,
      renderCell: (p) => (
        <Stack direction="row" spacing={1}>
          {p.value &&
            p.value.length > 0 &&
            p.value.map((ser: BankServiceType) => (
              <Chip
                size="small"
                variant="outlined"
                key={ser.id}
                label={ser.name}
              ></Chip>
            ))}
        </Stack>
      ),
    },
    {
      field: "serviceTypes",
      headerName: "Тип филиала",
      minWidth: 200,
      renderCell: (p) => (
        <Stack direction="row" spacing={1}>
          {p.value &&
            p.value.length > 0 &&
            p.value.map((ser: BankServiceType) => (
              <Chip
                size="small"
                variant="outlined"
                key={ser.id}
                label={ser.name}
              ></Chip>
            ))}
        </Stack>
      ),
    },
  ];

  return (
    <>
      <DataGrid
        sx={{ mt: "4rem" }}
        columns={cols}
        rows={services || []}
        loading={isLoading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20, 30, 40, 50, 60, 70, 100]}
      />
      <ServiceEditor
        isOpen={isAddOpen}
        submit={
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        }
        onSubmit={(s) => {
          setIsAddOpen(false);
          console.log("service: ", s);
        }}
      />
      <Fab
        variant="extended"
        onClick={() => {
          setIsAddOpen(true);
        }}
        color="primary"
        sx={{
          bottom: "-100px",
          right: "0px",
          position: "absolute",
          width: "50%",
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
