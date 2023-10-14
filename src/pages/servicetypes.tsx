import Header from "@/Components/Header";
import Config from "@/Config";
import { getServiceTypes } from "@/lib/bankServices";
import reqService from "@/lib/services/reqService";
import { Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";

export default function ServiceTypes() {
  const {
    data: types,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["serviceTypes"],
    queryFn: getServiceTypes,
  });

  const cols: GridColDef[] = [
    {
      field: "id",
      headerName: "№",
      minWidth: 50,
    },
    {
      field: "name",
      headerName: "Филиали",
    },
  ];

  return (
    <Container>
      <Header />
      <DataGrid
        sx={{ mt: "4rem" }}
        columns={cols}
        rows={types || []}
        loading={isLoading}
      />
    </Container>
  );
}
