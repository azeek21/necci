import Header from "@/Components/Header";
import Offices from "@/Components/Offices/Offices";
import { Container } from "@mui/material";

export default function OfficesPage() {
  return (
    <Container sx={{ position: "relative" }}>
      <Header />
      <Offices />
    </Container>
  );
}
