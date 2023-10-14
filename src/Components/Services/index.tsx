import { Container, Toolbar } from "@mui/material";
import WithAuth from "../Hocs/WithAuth";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import useGlobalStore from "@/store/globalStore";

const rs = [
  { id: 1, name: "Azeek" },
  { id: 2, name: "Shaxzod" },
];

function Services() {
  return (
    <Container sx={{ pt: "2rem" }}>
      <DataGrid
        rows={rs}
        columns={[
          { field: "id", headerName: "ID" },
          { field: "name", headerName: "Imya" },
        ]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Container>
  );
}

export default WithAuth(Services);
