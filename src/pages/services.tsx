import Header from "@/Components/Header";
import Services from "@/Components/Services";
import Config from "@/Config";
import { getBankServices, getServiceTypes } from "@/lib/bankServices";
import reqService from "@/lib/services/reqService";
import { Chip, Container, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";

export default function ServicesPage() {
  return (
    <Container sx={{ position: "relative" }}>
      <Header />
      <Services />
    </Container>
  );
}
