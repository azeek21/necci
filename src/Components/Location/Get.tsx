import Config from "@/Config";
import { Paper } from "@mui/material";
// import GoogleMapReact from "google-map-react";
import {
  YMaps,
  Map,
  Placemark,
  Button,
  useYMaps,
} from "@pbe/react-yandex-maps";
import { useMemo, useRef, useState } from "react";

interface IGetLocation {
  onGet: (points: number[]) => void;
}

export default function GetLocation({ onGet }: IGetLocation) {
  const defaultState = {
    center: [55.75, 37.57],
    zoom: 9,
    controls: ["zoomControl", "fullscreenControl"],
  };
  const [point, setPoint] = useState(null);
  function geometryHandler(ev: any) {
    const points = ev.get("coords");
    setPoint(points);
  }

  return (
    <Paper>
      <Map
        width="100%"
        height="500px"
        defaultState={defaultState}
        onClick={geometryHandler}
      >
        {point && <Placemark geometry={point} />}
        {point && (
          <Button
            options={{
              maxWidth: 300,
              position: {
                right: "50px",
                bottom: "50px",
              },
              size: "large",
              selectOnClick: false,
            }}
            data={{ content: "Выбирать" }}
            onClick={(ev: any) => {
              onGet(point);
            }}
          />
        )}
      </Map>
    </Paper>
  );
}
