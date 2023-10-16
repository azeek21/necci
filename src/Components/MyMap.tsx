// import Config from "@/Config";
// import { getOffices } from "@/lib/offices";
// import { Paper } from "@mui/material";
// // import GoogleMapReact from "google-map-react";
// import { YMaps, Map, Placemark, Circle } from "@pbe/react-yandex-maps";
// import { useQuery } from "@tanstack/react-query";
// import { useMemo, useState } from "react";

// export default function MyMap() {
//   const [point, setPoint] = useState(null);
//   const { data: offices } = useQuery({
//     queryKey: [Config.endpoints.offices],
//     queryFn: getOffices,
//   });

//   const Placemarks = useMemo(() => {
//     if (!offices) return [];
//     return offices.map((off) => (
//       <Placemark key={off.id} geometry={[off.latitude, off.longitude]} />
//     ));
//   }, [offices]);

//   return (
//     <Paper sx={{ height: "500px", width: "500px" }}>

//         <Map
//           defaultState={{
//             center: [55.75, 37.57],
//             zoom: 9,
//             controls: ["zoomControl", "fullscreenControl"],
//           }}
//           width={500}
//           height={500}
//           onClick={(e: any) => {
//             setPoint(e.get("coords"));
//             // console.log(e.get("coords"));
//           }}
//         >
//           {Placemarks}
//         </Map>
//       {/* </YMaps> */}
//     </Paper>
//   );
// }

export default function () {
  return <h1>Hi</h1>;
}
