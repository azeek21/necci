import Header from "@/Components/Header";
import Config from "@/Config";
import { getBankServices, getServiceTypes } from "@/lib/bankServices";
import reqService from "@/lib/services/reqService";
import { Chip, Container, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";

export default function Services() {
  const {
    data: services,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["serviceTypes"],
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
            p.value.map((ser: ServiceType) => (
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
            p.value.map((ser: ServiceType) => (
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
    <Container>
      <Header />
      <DataGrid
        sx={{ mt: "4rem" }}
        columns={cols}
        rows={services || []}
        loading={isLoading}
      />
    </Container>
  );
}
