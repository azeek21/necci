import Header from "@/Components/Header";
import Config from "@/Config";
import { getOffices } from "@/lib/offices";
import { Add } from "@mui/icons-material";
import { Button, Chip, Container, Fab, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import OfficeEditor from "./OfficeEditor";

export default function Offices() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const {
    data: offices,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [Config.endpoints.offices],
    queryFn: getOffices,
  });

  const cols: GridColDef[] = [
    {
      field: "id",
      headerName: "№",
      maxWidth: 50,
    },
    {
      field: "address",
      headerName: "Адрес",
      minWidth: 300,
      maxWidth: 500,
    },
    {
      field: "metroStation",
      headerName: "Метро",
      minWidth: 300,
      maxWidth: 500,
    },
    {
      field: "workingHours",
      headerName: "Открыт",
      minWidth: 400,
      maxWidth: 500,
      renderCell: ({ value }) => {
        return (
          <Stack
            direction={"row"}
            spacing={2}
            overflow={"auto"}
            sx={{
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {value.map((day: WeekDay) => (
              <Chip
                size="small"
                key={day.day}
                color={day.fullDay ? "success" : "default"}
                label={
                  <Typography variant="caption">
                    {day.day.substring(0, 3)}: {day.from}-{day.to}
                  </Typography>
                }
              />
            ))}
          </Stack>
        );
      },
    },
    {
      field: "services",
      headerName: "Услуги",
    },
  ];

  return (
    <>
      <Stack sx={{ my: 4 }} direction="row" justifyContent="end" spacing={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setIsAddOpen(true);
          }}
        >
          <Add />
        </Button>
      </Stack>
      <DataGrid
        sx={{
          minHeight: 500,
        }}
        columns={cols}
        rows={offices || []}
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
      <OfficeEditor
        isOpen={isAddOpen}
        onSubmit={(x) => {
          console.log("adding office:", x);
          setIsAddOpen(false);
        }}
        submit={
          <Button color="primary" type="submit">
            Добавит
          </Button>
        }
      />
    </>
  );
}
