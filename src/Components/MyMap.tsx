import { Paper } from "@mui/material";
// import GoogleMapReact from "google-map-react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function MyMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <Paper sx={{ height: "500px", width: "500px" }}>
      <YMaps>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 21 }}
          width={500}
          height={500}
        />
      </YMaps>
    </Paper>
  );
}
