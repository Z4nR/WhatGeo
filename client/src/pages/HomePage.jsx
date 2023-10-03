import { getProvByPage, provPage } from "../utils/network";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer } from "react-leaflet";

export default function HomePage() {
  let totalPage = 0;

  const pageProv = useQuery({
    queryKey: ["prov-page"],
    queryFn: async () => await provPage(),
  });

  totalPage = pageProv.data;

  const provData = useQuery({
    queryKey: ["prov-data", totalPage],
    queryFn: async () => {
      for (let i = 1; i <= totalPage; i++) {
        await getProvByPage(i);
      }
    },
  });

  console.log(provData.data);

  return (
    <div className="px-6">
      <MapContainer center={[-1.2480891, 122]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
